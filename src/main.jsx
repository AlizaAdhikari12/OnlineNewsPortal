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
import Filtered_Search from "./Components/Layout/Search/Filtered_Search.jsx";
import Empty from "./Components/Layout/Search/Empty.jsx";
import { Pagination } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: '/',
    element :<Layout/>,
    children:[{
      path:"",
      element:<App/>,
    },{
      path:"Business",
      element:<Business/>,
      errorElement:<Empty/>
    },
    {
      path:"Game",
      element:<Game/>,
      
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
},
{
  path:"Filtered_Search",
  element:<Filtered_Search/>
},{
path:"Empty",
element:<Empty/>},{
  path:'Paginatiom',
  element:<Pagination/>
},
],
errorElement:<Empty/>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router}/>

);
