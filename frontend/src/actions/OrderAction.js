import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CLEAR_ERRORS,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  MY_ORDER_FAIL,
  MY_ORDER_DETAILS_REQUEST,
  MY_ORDER_DETAILS_SUCCESS,
  MY_ORDER_DETAILS_FAIL,
  ALL_ORDER_REQUEST,
  ALL_ORDER_SUCCESS,
  ALL_ORDER_FAIL,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
} from "../constants/OrderConstant";
import axios from "axios";
import { allOrdersReducer } from "../reducers/OrderReducer";

const BASH_URL = "http://localhost:4000";

export const createOrder = (order) => async (dispatch, getstate) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(`${BASH_URL}/api/v1/order/new`, order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    return {
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    };
  }
};

//My orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDER_REQUEST });
    const { data } = await axios.get(`${BASH_URL}/api/v1/myorder/me`,{
      withCredentials: true,
    });

    dispatch({ type: MY_ORDER_SUCCESS, payload: data.orders });
  } catch (error) {
    return {
      type: MY_ORDER_FAIL,
      payload: error.response.data.message,
    };
  }
};

//Get order details
export const myOrderDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`${BASH_URL}/api/v1/order/${id}`,{
      withCredentials: true
    });

    dispatch({ type: MY_ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    return {
      type: MY_ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    };
  }
};

//All Orders -->Admin
export const allOrdersAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDER_REQUEST });
    const { data } = await axios.get(`${BASH_URL}/api/v1/admin/orders`, {
      withCredentials: true,
    });

    dispatch({ type: ALL_ORDER_SUCCESS, payload: data });
  } catch (error) {
    return {
      type: ALL_ORDER_FAIL,
      payload: error.response.data.message,
    };
  }
};
//Update Order -->Admin
export const updateOrdersAction = (orderId, order) => async (dispatch) => {
  try {
    console.log(order);
    dispatch({ type: UPDATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.put(
      `${BASH_URL}/api/v1/admin/order/${orderId}`,
      order,
      config
    );

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    return {
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    };
  }
};
//Delete Order -->Admin
export const deleteOrdersAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(`${BASH_URL}/api/v1/admin/order/${id}`,{
      withCredentials: true,
    });

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    return {
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    };
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
