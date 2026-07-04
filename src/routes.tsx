import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { ViewerPage } from './pages/ViewerPage.tsx';
import LearnBasics from './pages/LearnBasics.tsx';
import LearnAdvanced from './pages/LearnAdvanced.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const routes = [
  {
    path: "/",
    element: <Navigate to="/pt" replace />,
  },
  {
    path: "/:lang",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "viewer",
        element: <ViewerPage />,
      },
      {
        path: "learn/basics",
        element: <LearnBasics />,
      },
      {
        path: "learn/advanced",
        element: <LearnAdvanced />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/pt" replace />,
  }
];

const router = createBrowserRouter(routes);

export default router;