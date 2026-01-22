import express from "express";
import { createVideoSubmission } from "../controllers/videoSubmissionController.js";

const router = express.Router();

router.post("/", createVideoSubmission);

export default router;

