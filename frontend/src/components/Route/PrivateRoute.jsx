import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = (props) => {
  const { Component: component, ...rest } = props;
  console.log(rest);
  //   console.log(c);
  console.log({ ...rest }.path);
  //   console.log("hello");
  const { isAuthenticated } = useSelector((state) => state.user);
  //   console.log(isAuthenticated);

  return (
    <>
      <Routes>
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              console.log("hhehjbjejb");
              return <Navigate to="/login" />;
            }
            console.log("Compo");
            return <component {...props} />;
          }}
        />
      </Routes>
    </>
  );
};

export default PrivateRoute;
