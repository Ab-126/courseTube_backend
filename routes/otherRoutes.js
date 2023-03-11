import express from "express";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherControllers.js";
import { authorizeAdmin, isAutheticated } from "../middlewares/auth.js";

const router = express.Router();

// contact form
router.route("/contact").post(contact);

// request form
router.route("/courserequest").post(courseRequest);

// Get Admin Dashbaord Stats
router.route("/admin/stats").get(isAutheticated, authorizeAdmin, getDashboardStats)

export default router;
