import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Components/Dashboard/AddProduct";
import Spinner from "../../Components/Spinner";
import Main from "../../Layouts/Main";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Action from "../../Pages/Home/Categories/Action/Action";
import Dslr from "../../Pages/Home/Categories/Dslr/Dslr";
import Mirrorless from "../../Pages/Home/Categories/Mirrorless/Mirrorless";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
const LazyBlogs = React.lazy(() => import("../../Pages/Blogs/Blogs"));
const LazyPayment = React.lazy(() => import("../../Pages/Payment/Payment/Payment"));
const LazyDashboardLayout = React.lazy(() => import("../../Layouts/DashboardLayout"));
const LazyMyOrders = React.lazy(() => import("../../Pages/Dashboard/MyOrders"));
const LazyWelcome = React.lazy(() => import("../../Pages/Dashboard/Welcome"));
const LazyHome = React.lazy(() => import("../../Pages/Home/Home/Home"));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <LazyHome />
          </React.Suspense>
        )
      },
      {
        path: '/dslr',
        element: <PrivateRoute><Dslr></Dslr></PrivateRoute>
      },
      {
        path: '/mirrorless',
        element: <PrivateRoute><Mirrorless></Mirrorless></PrivateRoute>
      },
      {
        path: '/action',
        element: <PrivateRoute><Action></Action></PrivateRoute>
      },
      {
        path: '/blogs',
        element: (
          <React.Suspense fallback={<Spinner />}>
            {/* <Blogs></Blogs> */}
            <LazyBlogs></LazyBlogs>
          </React.Suspense>
        )
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
    element: (
      <React.Suspense fallback={<Spinner />}>
        <PrivateRoute>
          {/* <DashboardLayout></DashboardLayout> */}
          <LazyDashboardLayout></LazyDashboardLayout>
        </PrivateRoute>
      </React.Suspense>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <LazyWelcome />
          </React.Suspense>
        )
      },
      {
        path: '/dashboard/seller/addproduct',
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        )
      },
      {
        path: '/dashboard/seller/myproducts',
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        )
      },
      {
        path: '/dashboard/admin/allsellers',
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/admin/allbuyers',
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/admin/reporteditems',
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/buyer/myorders',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <BuyerRoute>
              <LazyMyOrders />
            </BuyerRoute>
          </React.Suspense>
        )
      },
      {
        path: '/dashboard/payment/:id',
        loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/bookings/product/${params.id}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem('joldikino-token')}`
          }
        }),
        // element: <PrivateRoute><Payment></Payment></PrivateRoute>
        element: (
          <React.Suspense fallback={<Spinner></Spinner>}>
            <LazyPayment></LazyPayment>
          </React.Suspense>
        )
      },
    ]
  }
])