import React from "react";
import "./AllProducts.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteProductAction,
  getAllProductsAdmin,
} from "../../actions/ProductAction";
import SideBar from "./Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAlert } from "react-alert";
import { DELETE_PRODUCT_RESET } from "../../constants/ProductConstants";

const AllProducts = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, products } = useSelector((state) => state.allProducts);
  const {
    error: deleteError,
    isDeleted,
    loading,
  } = useSelector((state) => state.product);
  // const { id } = useParams();

  useEffect(() => {
    dispatch(getAllProductsAdmin());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors);
    }
    if (isDeleted) {
      alert.success("Product deleted successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
      // navigate("/admin/dashboard");
    }
  }, [dispatch, error, alert, isDeleted, deleteError, loading]);

  const deleteProductHandler = (id) => {
    dispatch(deleteProductAction(id));
  };

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 320,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 120,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
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
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
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

  products &&
    products.forEach((product) => {
      rows.push({
        id: product._id,
        stock: product.stock,
        price: product.price,
        name: product.name,
      });
    });
  return (
    <>
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
    </>
  );
};

export default AllProducts;
