import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getSingleUserDetails,
  updateUser,
} from "../../actions/UserAction";
import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { UPDATE_USER_RESET } from "../../constants/UserConstants";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Loading from "../layout/Loading/Loading";

const UpdateUser = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector((state) => state.userDetail);
  const { error: updateUserError, isUpdated } = useSelector(
    (state) => state.userUpdatedelete
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const updateUserHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    dispatch(updateUser(id, myForm));
  };

  useEffect(() => {
    if (user && user._id !== id) {
      dispatch(getSingleUserDetails(id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    if (updateUserError) {
      alert.error(updateUserError);
      dispatch(clearErrors);
    }

    if (isUpdated) {
      alert.success("User updated successfully");
      dispatch({ type: UPDATE_USER_RESET });
      navigate("/admin/users");
    }
  }, [dispatch, error, alert, isUpdated, id, updateUserError, loading]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashbord">
          <Sidebar />
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={updateUserHandler}
            >
              <h1>Update User Details</h1>

              <div>
                <AttachMoneyIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <AttachMoneyIcon />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <AccountTreeIcon />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <Button
                id="createProductBtn"
                type="submit"
                //   disabled={loading ? true : false}
              >
                Update
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateUser;
