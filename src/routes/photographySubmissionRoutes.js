import express from "express";
import { createPhotographySubmission } from "../controllers/photographySubmissionController.js";

const router = express.Router();

router.post("/", createPhotographySubmission);

export default router;
