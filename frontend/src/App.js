import React from 'react';
import Resume from './components/Resume';
import Project from './components/Project';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Applayout from './components/Applayout';
import Test from './components/Test'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const App = () => {
  const path = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/resume',
          element: <Resume />,
        },
        {
          path: '/project',
          element: <Project />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/test',
          element: <Test />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={path} />;
};
export default App;
