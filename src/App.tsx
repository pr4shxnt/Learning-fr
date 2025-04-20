import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRoot from './Components/Roots/UserRoot';
import UserDashboard from './Pages/UserDashboard';
import Root from './Components/Roots/Root';


const routes = [
  {
    path: '/user',
    element: <UserRoot />, // this needs to be passed to the <Route>
    children: [
      {
        path: '',
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: "",
    element: <Root/>,
    children: [

    ]
  }
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
