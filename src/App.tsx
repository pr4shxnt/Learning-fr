import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/Store';

import UserRoot from './Components/Roots/UserRoot';
import UserDashboard from './Pages/UserDashboard';
import Root from './Components/Roots/Root';
import Homepage from './Pages/Homepage';

const routes = [
  {
    path: '/user',
    element: <UserRoot />,
    children: [
      {
        path: '',
        element: <UserDashboard />,
      },
      {
        path: 'profile',
        element: <UserDashboard/>
      }
    ],
  },
  {
    path: '',
    element: <Root />,
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
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
