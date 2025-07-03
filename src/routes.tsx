import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';

const routes = [
  
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ],
    }
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;