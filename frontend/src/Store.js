import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  allProductsAdmin,
  createNewProductReducer,
  deleteReviewReducer,
  getAllReviewReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
} from "./reducers/ProductReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  updateUser,
  userDetails,
  userReducer,
} from "./reducers/UserReducer";

import { cartReducer } from "./reducers/CartReducer";

import {
  allOrdersReducer,
  myOrderDetailsReducer,
  myOrderReducer,
  newOrderReducer,
  orderReducer,
} from "./reducers/OrderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrderReducer,
  orderDetails: myOrderDetailsReducer,
  newReview: newReviewReducer,
  allProducts: allProductsAdmin,
  createNewProduct: createNewProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetail: userDetails,
  userUpdatedelete: updateUser,
  allreviews: getAllReviewReducer,
  deleteReview: deleteReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
