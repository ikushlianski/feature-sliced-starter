import { PostsPage } from "pages/Posts.page";
import React from "react";
import App from "app/App";
import { CreateProjectPage } from "pages/CreateProject.page";
import { ErrorPage } from "pages/Error.page";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PostsPage />,
      },
      {
        path: "projects/create",
        element: <CreateProjectPage />,
      },
      // other routes
    ],
  },
];
