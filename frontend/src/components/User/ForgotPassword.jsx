import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../actions/UserAction";
import { clearErrors } from "../../actions/ProductAction";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";
import { TextField, Button, Box } from "@mui/material";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { message, loading, error } = useSelector((state) => state.forgotPassword);

  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={submit} className="flex flex-col justify-center items-center space-y-6 p-6 h-[100vh]">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold">Forgot Password</h2>
            </div>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <TextField
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                label="Email"
                id="fullWidth"
                className="mb-4"
              />
            </Box>
            <Button type="submit" variant="contained" className="w-full bg-black text-white py-2 rounded-lg mt-5">
              Send Link
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default ForgotPassword;
