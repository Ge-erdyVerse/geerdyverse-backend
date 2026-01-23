import express from "express";
import { createDesignRequest } from "../controllers/designController.js";

const router = express.Router();

router.post("/", createDesignRequest);

export default router;
