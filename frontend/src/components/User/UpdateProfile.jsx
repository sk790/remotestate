import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateProfile } from "../../actions/UserAction";
import "./SignUp.css";
import { useEffect } from "react";
import { clearErrors } from "../../actions/ProductAction";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";
import "./UpdateProfile.css";
import { UPDATE_PROFILE_RESET } from "../../constants/UserConstants";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [avatar, setavatar] = useState();

  const { user } = useSelector((state) => state.user);
  const { loading, isUpdated, error } = useSelector((state) => state.profile);

  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const [avatarPriview, setAvatarPriview] = useState(user.avatar.url);

  const avatarChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPriview(reader.result);
        setavatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile successfully updated");
      dispatch(loadUser());
      navigate("/account");
    }

    dispatch({ type: UPDATE_PROFILE_RESET });
  }, [alert, error, dispatch, isUpdated, user, navigate]);
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
              <h2>Update Profile</h2>
            </div>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={name}
                type="text"
                onChange={(e) => setname(e.target.value)}
                fullWidth
                label="Name"
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
                value={email}
                type="text"
                onChange={(e) => setemail(e.target.value)}
                fullWidth
                label="Email"
                id="fullWidth"
              />
            </Box>

            <div className="signupimage">
              <img src={avatarPriview} alt="Avatar " />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={avatarChange}
              />
            </div>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdateProfile;
