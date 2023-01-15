import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { RegisterPage,IndvPage } from "./views/Auth";
import { HomePage,SchedulePage,LeaderboardPage,ErrorPage } from "./views";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/schedule",
        element: <SchedulePage />
        
    },{
        path: "/leaderboard",
        element: <LeaderboardPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/register/:id",
        element: <IndvPage />
    }

])

function Router(){
    return (
        <RouterProvider router={router}>
 
        </RouterProvider>
    )
}

export default Router;