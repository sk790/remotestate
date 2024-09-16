import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";

import "./SignUp.css";
import { useEffect, useState } from "react";
import { clearErrors } from "../../actions/ProductAction";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";
import "./UpdateProfile.css";
import { resetPassword } from "../../actions/UserAction";

const ResetPassword = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const { token } = useParams();

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, password, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Password reset successfully");
      navigate("/login");
    }
  });
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
              <h2>Reset Password</h2>
            </div>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                type="password"
                onChange={(e) => setconfirmPassword(e.target.value)}
                fullWidth
                label="Confirm Password"
                id="fullWidth"
              />
            </Box>

            <Button type="submit" variant="contained">
              Reset Password
            </Button>
            <div className="loginLink">
              <Link to="/login">Aready have an acoount?Click Hare</Link>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ResetPassword;
