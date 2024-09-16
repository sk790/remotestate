import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails.jsx";
import Products from "./components/Product/Products.jsx";
import Search from "./components/Product/Search.jsx";
import Login from "./components/User/Login.jsx";
import SignUp from "./components/User/SignUp.jsx";
import { useEffect } from "react";
import store from "./Store.js";
import { loadUser } from "./actions/UserAction.js";
import UserOptions from "./components/layout/Header/UserOptions.jsx";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile.jsx";
import UpdateProfile from "./components/User/UpdateProfile.jsx";
import UpdatePassword from "./components/User/UpdatePassword.jsx";
import ForgotPassword from "./components/User/ForgotPassword.jsx";
import ResetPassword from "./components/User/ResetPassword.jsx";
import Shipping from "./components/Cart/Shipping.jsx";
import ConfirmOrder from "./components/Cart/ConfirmOrder.jsx";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutRout from "./components/Route/CheckOutRout.jsx";
import PaymentSuccess from "./components/Cart/PaymentSuccess.jsx";
import MyOrders from "./components/Orders/MyOrders.jsx";
import { useDispatch } from "react-redux";
import MyOrderDetails from "./components/Orders/MyOrderDetails.jsx";
// import Dashboard from "./components/Admin/Dashboard.jsx";
import AllProducts from "./components/Admin/AllProducts.jsx";
import NewProduct from "./components/Admin/NewProduct.jsx";
import UpdateProduct from "./components/Admin/UpdateProduct.jsx";
import AllOrders from "./components/Admin/AllOrders.jsx";
import UpdateOrder from "./components/Admin/UpdateOrder.jsx";
import Users from "./components/Admin/Users.jsx";
import UpdateUser from "./components/Admin/UpdateUser.jsx";
import ProductReview from "./components/Admin/ProductReview.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Navbar from "./components/layout/Header/Navbar.jsx";
import { Toaster } from "react-hot-toast";
// import NewDashboard from "./components/Admin/newDashboard/NewDashboard.jsx";
import Dashboard from "./components/Admin/newDashboard2/Dashboard.js";

function App() {
  const dispatch = useDispatch();
  const STRIPE_API_KEY =
    "pk_test_51OXHjrSDUYFvzq85HIn01Zr8UJAHf607x5wkNML4vcLVF8P9oGE4FHgmdLNz6TiELycz44zK2Pg7IMrLSQp1ogg700PAkTFiLf";

  //jab site load hoti he to state ko load kar deta he ye useefect function
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUser());
  }, [store, dispatch]);

  return (
    <>
      <Router>
        {isAuthenticated && <Navbar/>}
        {/* {isAuthenticated && <UserOptions user={user} />} */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/product/:id" Component={ProductDetails} />
          <Route exact path="/products" Component={Products} />
          <Route path="/products/:keyword" Component={Products} />
          <Route exact path="/search" Component={Search} />
          <Route exact path="/signup" Component={SignUp} />
          <Route exact path="/login" Component={Login} />
          {/* {isAuthenticated && ( */}
          {isAuthenticated ? (
            <Route exact path="/account" Component={Profile} />
          ) : (
            <Route exact path="/account" Component={Login} />
          )}

          {isAuthenticated ? (
            <Route exact path="/profile/update" Component={UpdateProfile} />
          ) : (
            <Route exact path="/profile/update" Component={Login} />
          )}

          {isAuthenticated ? (
            <Route exact path="/password/update" Component={UpdatePassword} />
          ) : (
            <Route exact path="/password/update" Component={Login} />
          )}

          <Route exact path="/forgot/password" Component={ForgotPassword} />
          <Route
            exact
            path="/password/reset/:token"
            Component={ResetPassword}
          />
          {isAuthenticated ? (
            <Route exact path="/login/shipping" Component={Shipping} />
          ) : (
            <Route exact path="/login/shipping" Component={Login} />
          )}

          {isAuthenticated ? (
            <Route exact path="/order/confirm" Component={ConfirmOrder} />
          ) : (
            <Route exact path="/order/confirm" Component={Login} />
          )}
          {isAuthenticated ? (
            <Route
              exact
              path="/process/payment"
              element={<CheckOutRout stripe={loadStripe(STRIPE_API_KEY)} />}
            />
          ) : (
            <Route exact path="/process/payment" Component={Login} />
          )}

          {isAuthenticated ? (
            <Route exact path="/success" Component={PaymentSuccess} />
          ) : (
            <Route exact path="/success" Component={Login} />
          )}

          {isAuthenticated ? (
            <Route exact path="/orders" Component={MyOrders} />
          ) : (
            <Route exact path="/orders" Component={Login} />
          )}
          {isAuthenticated ? (
            <Route exact path="/order/:id" Component={MyOrderDetails} />
          ) : (
            <Route exact path="/order/:id" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/dashboard" Component={Dashboard} />
          ) : (
            <Route exact path="/admin/dashboard" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/products" Component={AllProducts} />
          ) : (
            <Route exact path="/admin/products" Component={Login} />
          )}

          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/create-product" Component={NewProduct} />
          ) : (
            <Route exact path="/admin/create-product" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route
              exact
              path="/admin/product/:productId"
              Component={UpdateProduct}
            />
          ) : (
            <Route exact path="/admin/product/:productId" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/orders" Component={AllOrders} />
          ) : (
            <Route exact path="/admin/orders" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/order/:id" Component={UpdateOrder} />
          ) : (
            <Route exact path="/admin/order/:id" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/users" Component={Users} />
          ) : (
            <Route exact path="/admin/users" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/user/update/:id" Component={UpdateUser} />
          ) : (
            <Route exact path="/admin/user/update/:id" Component={Login} />
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Route exact path="/admin/reviews" Component={ProductReview} />
          ) : (
            <Route exact path="/admin/reviews" Component={Login} />
          )}
          <Route path="/*" Component={PageNotFound} />
        </Routes>
        {isAuthenticated && <Footer />}
        <Toaster/>
      </Router>
    </>
  );
}

export default App;

// 4000 0027 6000 3184
