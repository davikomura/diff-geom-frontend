import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { ViewerPage } from './pages/ViewerPage.tsx';

const routes = [
  
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/viewer",
          element: <ViewerPage />,
        }
      ],
    }
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;