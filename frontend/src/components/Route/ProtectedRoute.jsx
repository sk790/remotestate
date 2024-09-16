// import React from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import Profile from "../User/Profile";
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useSelector((state) => state.user);

//   const navigate = useNavigate();
//   return (
//     // <>
// //       {!loading && (
// //         <Route
// //           {...rest}
// //           render={(props) => {
// //             if (!isAuthenticated === false) {
// //               return navigate("/login");
// //             }

// //             //   if (isAdmin === true && user.role !== "admin") {
// //             //     return <Redirect to="/login" />;
// //             //   }

// //             return <Component {...props} />;
// //           }}
// //         />
// //       )}
// //     </>
// //   );
// // };
// // const ProtectedRoute = () => {

// //   const { isAuthenticated } = useSelector((state) => state.user);

// //   return <>{isAuthenticated && <Profile  />}</>;
// // });

// export default ProtectedRoute;
