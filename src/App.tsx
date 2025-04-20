import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import UserRoot from './Components/Roots/UserRoot';

const routes = [
  {
    path: '/',
    element: <UserRoot />, // this needs to be passed to the <Route>
    children: [
      {
        path: '',
        element: <Homepage />,
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element}>
            {route.children?.map((child, cIdx) => (
              <Route key={cIdx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
