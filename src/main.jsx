import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Createpost, { createPostAction } from "./components/Createpost.jsx";
import Postlist from "./components/Postlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Postlist /> },
      {
        path: "/create-post",
        element: <Createpost />,
        action: createPostAction ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
