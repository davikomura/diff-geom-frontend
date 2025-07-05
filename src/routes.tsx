import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { ViewerPage } from './pages/ViewerPage.tsx';
import LearnBasics from './pages/LearnBasics.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const routes = [
  
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
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
        },
        {
          path: "/learn/basics",
          element: <LearnBasics />,
        }
      ],
    }
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;