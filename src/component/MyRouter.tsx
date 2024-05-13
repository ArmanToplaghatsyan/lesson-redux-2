import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { MyError } from "../pages/MyError";
import { Tasks } from "../pages/Tasks";
import { AddTask } from "../pages/AddTasks";

export const MyRouter = React.memo(() => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {path: '', element: <Tasks/>},
                {path: 'addTasks', element: <AddTask/>},
            ]
        },
        {
            path: '*',
            element: <MyError/>
        }

    ])
    return router
}) 