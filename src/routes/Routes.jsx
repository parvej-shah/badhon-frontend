import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import SignInPage from "../auth/SignInPage";
import ErrorPage from "../pages/Error";
import RegisterPage from "../auth/RegisterPage";
import Dashboard from "../layouts/Dashboard";
import Requests from "../pages/Dashboards/Requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/all-requests",
            element: <Requests />,
          },
        ],
      },
      {
        path: "/login",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
