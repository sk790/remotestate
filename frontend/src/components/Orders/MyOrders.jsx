import React from "react";
import "./MyOrders.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { myOrders } from "../../actions/OrderAction";
import { DataGrid } from "@material-ui/data-grid";
import { clearErrors } from "../../actions/UserAction";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Loading from "../layout/Loading/Loading";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
const MyOrders = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const rows = [];
  const columns = [
    { field: "id", headerName: "Order Id", minWidth: 300 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 300,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "orderQty",
      headerName: "Item Qty",
      type: "number",
      minWidth: 170,
    },
    { field: "amount", headerName: "Amount", type: "number", minWidth: 300 },
    {
      field: "action",
      headerName: "View",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  orders &&
    orders.forEach((order, index) => {
      rows.push({
        orderQty: order.orderItems.length,
        id: order._id,
        status: order.orderStatus,
        amount: order.totalPrice,
      });
    });
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(myOrders());
  }, [dispatch, alert, error]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </div>
      )}
    </>
  );
};

export default MyOrders;
