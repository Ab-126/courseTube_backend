import express from "express";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentController.js";
import { isAutheticated } from "../middlewares/auth.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAutheticated, buySubscription);

// Verfiy Payment and save reference in database
router.route("/paymentverification").post(isAutheticated, paymentVerification);

// Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

// Cancel Subscription
router.route("/subscribe/cancel").delete(isAutheticated, cancelSubscription);

export default router;
