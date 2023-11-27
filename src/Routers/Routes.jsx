import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllProperties from "../pages/AllProperties/AllProperties";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DetailProperty from "../pages/DetailProperty/DetailProperty";
import Dashboard from "../Layout/Dashboard";
import Wish from "../pages/Dashboard/Wish/Wish";
import MakeAnOffer from "../pages/Dashboard/MakeAnOffer/MakeAnOffer";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allProperties",
        element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
      },
      {
        path: "/detail/:id",
        element: <PrivateRoute><DetailProperty></DetailProperty></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/property/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element:<SignUp></SignUp>
      } 
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'wish',
        element:<Wish></Wish>
      },
      {
        path: 'userProfile',
        element:<MyProfile></MyProfile>
      },
     {
        path: 'makeAnOffer/:id',
        element: <MakeAnOffer></MakeAnOffer>,
        loader : ({params}) => fetch(`http://localhost:5000/property/${params.id}`)
    },

    // admin routes

    {
      path: 'users',
      element:<AllUsers></AllUsers>
    },
    {
      path: 'adminProfile',
      element:<AdminProfile></AdminProfile>
    }
    ]
  }
]);


