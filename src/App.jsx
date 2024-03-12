import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import AllProducts from "./pages/AllProducts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
const App = () => {
  let allRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/allproducts",
      element: <AllProducts />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ]);
  return (
    <>
      <RouterProvider router={allRoute} />
    </>
  );
};

export default App;
