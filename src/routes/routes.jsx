import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashBoardHome from "../pages/dashboard/DashBoardHome";
import ManageAllProducts from "../pages/dashboard/ManageAllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import EditProduct from "../pages/dashboard/EditProduct";
import SingleProduct from "../components/shared/SingleProduct";
import ProductCard from "../components/cards/ProductCard";
import ProductDetails from "../components/cards/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{
        index: true,
        element: <Home />,
       
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      ]
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children : [
    
        {
          index: true,
          element: <DashBoardHome />,
          loader: () => fetch("http://localhost:3000/products"),
        },
        {
          path: "manage-products",
          element: <ManageAllProducts />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "edit-product/:id",
          element: <EditProduct />,
        },{
        path: "products/:id",
        element: <ProductDetails />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      ]
    }
  ]);

  export default router