import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import { authorizeAdmin, isAutheticated, authorizeSubscribers } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// Get All Courses without lectures
router.route("/courses").get(getAllCourses);

// create new course - only admin
router
  .route("/createcourse")
  .post(isAutheticated, authorizeAdmin, singleUpload, createCourse);

// Add lecture, Delete Course, Get Course Details
router
  .route("/course/:id")
  .get(isAutheticated, authorizeSubscribers, getCourseLectures)
  .post(isAutheticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAutheticated, authorizeAdmin, deleteCourse);

// Delete lecture
router.route("/lecture").delete(isAutheticated, authorizeAdmin, deleteLecture);

export default router;
