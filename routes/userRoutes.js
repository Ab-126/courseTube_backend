import express from "express";
import {
  addToPlaylist,
  changepassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeAdmin, isAutheticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(singleUpload, register);

// login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAutheticated, getMyProfile);

// Delete my profile
router.route("/me").delete(isAutheticated, deleteMyProfile);

// ChangePassword
router.route("/changepassword").put(isAutheticated, changepassword);

// UpdateProfile
router.route("/updateprofile").put(isAutheticated, updateProfile);

// UpdateProfilePicture
router
  .route("/updateprofilepicture")
  .put(isAutheticated, singleUpload, updateProfilePicture);

// ForgetPassword
router.route("/forgetpassword").post(forgetPassword);

// ResetPassword
router.route("/resetpassword/:token").put(resetPassword);

// AddtoPlaylist
router.route("/addtoplaylist").post(isAutheticated, addToPlaylist);

// RemoveFromPlaylist
router.route("/removefromplaylist").delete(isAutheticated, removeFromPlaylist);

// Admin Routes
router.route("/admin/users").get(isAutheticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAutheticated, authorizeAdmin, updateUserRole)
  .delete(isAutheticated, authorizeAdmin, deleteUser);

export default router;
