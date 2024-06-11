import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import "./icon";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Business from "./Components/Business/Business.jsx";
import Game from "./Components/Game/Game.jsx"
import World from "./Components/World/World.jsx";
import Entertainment from "./Components/Entertainment/Entertainment.jsx";
import General from "./Components/Thought/General.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element :<Layout/>,
    children:[{
      path:"",
      element:<App/>
    },{
      path:"Business",
      element:<Business/>
    },
    {
      path:"Game",
      element:<Game/>
    },
  {
    path:"World",
    element:<World/>
  },
{
  path:"Entertainment",
  element:<Entertainment/>
},
{
  path:"General",
  element:<General/>
}]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
