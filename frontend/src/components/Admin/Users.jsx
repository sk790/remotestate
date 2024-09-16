import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, deleteUser, getAllUsers } from "../../actions/UserAction";
import SideBar from "./Sidebar";
import { Link, useParams } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";
import { DELETE_USER_RESET } from "../../constants/UserConstants";

const Users = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { users } = useSelector((state) => state.allUsers);
  const { error, isDeleted, loading } = useSelector(
    (state) => state.userUpdatedelete
  );
  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };
  const columns = [
    { field: "id", headerName: "Users ID", flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      //   minWidth: 250,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      //   minWidth: 120,
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      //   minWidth: 150,
      flex: 0.3,
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
            <Link to={`/admin/user/update/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
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

  users &&
    users.forEach((user) => {
      rows.push({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });

  

  useEffect(() => {
    dispatch(getAllUsers());

    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }
    if (isDeleted) {
      alert.success("User deleted successfully");
      dispatch({ type: DELETE_USER_RESET });
      // navigate("/admin/dashboard");
    }
  }, [dispatch, error, alert, isDeleted]);
  return (
    <>
      <div className="dashbord">
        <SideBar />
        {loading ? (
          <Loading />
        ) : (
          <div className="productListContainer">
            <h1 id="productListHeading">ALL USERS</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
