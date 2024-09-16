import React from "react";
import {
  allOrdersAction,
  clearErrors,
  deleteOrdersAction,
  updateOrdersAction,
} from "../../actions/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import SideBar from "./Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { DELETE_ORDER_RESET } from "../../constants/OrderConstant";
import Loading from "../layout/Loading/Loading";

const AllOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders);
  const {
    error: deleteError,
    isDeleted,
    loading,
  } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(allOrdersAction());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors);
    }
    if (isDeleted) {
      alert.success("Order deleted successfully");
      dispatch({ type: DELETE_ORDER_RESET });
    }
  }, [
    dispatch,
    allOrdersAction,
    isDeleted,
    error,
    deleteError,
    alert,
    loading,
  ]);

  const updateProductHandler = (id) => {
    dispatch(updateOrdersAction(id));
  };
  const deleteorderHandler = (id) => {
    dispatch(deleteOrdersAction(id));
  };

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 0.5 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
      flex: 0.2,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemqty",
      headerName: "Items",
      type: "number",
      minWidth: 120,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteorderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((order) => {
      rows.push({
        id: order._id,
        status: order.orderStatus,
        itemqty: order.orderItems.length,
        amount: order.totalPrice,
      });
    });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashbord">
          <SideBar />
          <div className="productListContainer">
            <h1 id="productListHeading">ALL PRODUCTS</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AllOrders;
