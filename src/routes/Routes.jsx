import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import SignInPage from "../auth/SignInPage";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<SignInPage/>
            },
        ]
    },
    {
        path:'/*',
        element:<ErrorPage/>
    }
    ]);

export default router;
