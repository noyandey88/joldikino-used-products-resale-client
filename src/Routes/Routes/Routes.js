import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Components/Dashboard/AddProduct";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems";
import Welcome from "../../Pages/Dashboard/Welcome";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Action from "../../Pages/Home/Categories/Action";
import Dslr from "../../Pages/Home/Categories/Dslr";
import Mirrorless from "../../Pages/Home/Categories/Mirrorless";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dslr',
        element: <Dslr></Dslr>
      },
      {
        path: '/mirrorless',
        element: <Mirrorless></Mirrorless>
      },
      {
        path: '/action',
        element: <Action></Action>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><Welcome></Welcome></PrivateRoute>
      },
      {
        path: '/dashboard/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/dashboard/myproducts',
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      },
      {
        path: '/dashboard/allsellers',
        element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>
      },
      {
        path: '/dashboard/allbuyers',
        element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
      },
      {
        path: '/dashboard/reporteditems',
        element: <PrivateRoute><ReportedItems></ReportedItems></PrivateRoute>
      },
    ]
  }
])