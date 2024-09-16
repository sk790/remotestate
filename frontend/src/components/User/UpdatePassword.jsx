import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SignUp.css";
import { useEffect } from "react";
import { clearErrors } from "../../actions/ProductAction";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";
import "./UpdateProfile.css";
import { UPDATE_PASSWORD_RESET } from "../../constants/UserConstants";
import { updatePassword } from "../../actions/UserAction";

const UpdatePassword = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, isUpdated } = useSelector((state) => state.profile);

  const [formData, setformData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      updatePassword(
        formData.oldPassword,
        formData.newPassword,
        formData.confirmPassword
      )
    );
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Password Updated Successfully");

      navigate("/account");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, alert, isUpdated, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form
          encType="multipart/form-data"
          onSubmit={submit}
          className="formBox"
        >
          <div className="inputBox">
            <div className="signupheading">
              <h2>Update Password</h2>
            </div>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={formData.oldPassword}
                type="password"
                onChange={handleChange}
                fullWidth
                label="Old Password"
                id="fullWidth"
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={formData.newPassword}
                type="password"
                onChange={handleChange}
                fullWidth
                label="New Password"
                id="fullWidth"
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={formData.confirmPassword}
                type="password"
                onChange={handleChange}
                fullWidth
                label="Confirm Password"
                id="fullWidth"
              />
            </Box>

            <Button type="submit" variant="contained">
              Update Password
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdatePassword;
