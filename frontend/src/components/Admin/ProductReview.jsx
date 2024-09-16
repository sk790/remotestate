import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { useAlert } from "react-alert";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SideBar from "./Sidebar";
import { DELETE_REVIEW_RESET } from "../../constants/ProductConstants";
import Loading from "../layout/Loading/Loading";
import { useEffect } from "react";
import {
  clearErrors,
  deleteReview,
  getAllReviews,
} from "../../actions/ProductAction";
import { useState } from "react";
import "./ProductReviews.css";
import { useNavigate } from "react-router-dom";

const ProductReview = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  const { error, reviews } = useSelector((state) => state.allreviews);
  const {
    error: deleteReviewError,
    isDeleted,
    loading,
  } = useSelector((state) => state.deleteReview);
  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReview(reviewId, productId));
  };

  const columns = [
    { field: "id", headerName: "Review ID", minWidth: 200, flex: 0.5 },

    {
      field: "user",
      headerName: "User",
      minWidth: 200,
      flex: 0.6,
    },

    {
      field: "comment",
      headerName: "Comment",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      minWidth: 180,
      flex: 0.4,

      cellClassName: (params) => {
        return params.getValue(params.id, "rating") >= 3
          ? "greenColor"
          : "redColor";
      },
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
            <Button
              onClick={() =>
                deleteReviewHandler(params.getValue(params.id, "id"))
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

  reviews &&
    reviews.forEach((item) => {
      rows.push({
        id: item._id,
        rating: item.rating,
        comment: item.comment,
        user: item.name,
      });
    });

  useEffect(() => {
    if (productId.length === 24) {
      dispatch(getAllReviews(productId));
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteReviewError) {
      alert.error(deleteReviewError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Review Deleted Successfully");
      //   dispatch(getAllReviews(productId));
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, alert, productId, error, isDeleted, deleteReview, loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashbord">
          <SideBar />
          <div className="productReviewsContainer">
            <form className="productReviewsForm" onSubmit={deleteReviewHandler}>
              <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>

              <div>
                <StarBorderIcon />
                <input
                  type="text"
                  placeholder="Product Id"
                  required
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={
                  loading ? true : false || productId === "" ? true : false
                }
              >
                Search
              </Button>
            </form>

            {reviews && reviews.length > 0 ? (
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                className="productListTable"
                autoHeight
              />
            ) : (
              <h1 className="productReviewsFormHeading">No Reviews Found</h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductReview;
