import express from "express";
import cors from "cors";

import submissionsRoutes from "./routes/submissionsRoutes.js";
import videoSubmissionRoutes from "./routes/videoSubmissionRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Geerdyverse Backend Running");
});

// Existing route for 3D submissions
app.use("/api/submissions", submissionsRoutes);

// New route for video submissions
app.use("/api/video-submissions", videoSubmissionRoutes);

export default app;
