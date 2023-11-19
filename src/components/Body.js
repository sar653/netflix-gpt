import React  from "react";
import Login from "./Login";
import Browser from "./Browser";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

//import { useNavigate } from "react-router-dom";
const Body = () => {
  // const navigate=useNavigate() or window.locaion.href
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },

    { path: "/Browser", element: <Browser /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
