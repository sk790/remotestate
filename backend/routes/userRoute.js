const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUserrole,
} = require("../controller/userController");

const { isAuthenticated, authorizeRole } = require("../middleware/auth");

router.route("/ragister").post(registerUser);

router.route("/login").post(loginUser);

//Send reset password link
router.route("/password/forgot").post(forgetPassword);

//With the help of link forgote password
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);

//Get user detail
router.route("/me").get(isAuthenticated, getUserDetails);

//Update user password if user already logged in
router.route("/password/update").put(isAuthenticated, updateUserPassword);

//Update profile
router.route("/profile/update").put(isAuthenticated, updateProfile);

//Get all users details
router
  .route("/admin/users")
  .get(isAuthenticated, authorizeRole("admin"), getAllUsers);

//Get Single user detail
router
  .route("/admin/user/:id")
  .get(isAuthenticated, authorizeRole("admin"), getSingleUser)
  .delete(isAuthenticated, authorizeRole("admin"), deleteUser)
  .put(isAuthenticated, authorizeRole("admin"), updateUserrole);

module.exports = router;
