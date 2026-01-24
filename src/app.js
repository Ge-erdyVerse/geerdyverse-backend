import express from "express";
import cors from "cors";

import submissionsRoutes from "./routes/submissionsRoutes.js";
import videoSubmissionRoutes from "./routes/videoSubmissionRoutes.js";
import designRequestRoutes from "./routes/designRoutes.js";
import photographySubmissionRoutes from "./routes/photographySubmissionRoutes.js"; // NEW

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Geerdyverse Backend Running");
});

// 3D Modelling Submissions
app.use("/api/submissions", submissionsRoutes);

// Video Editing Submissions
app.use("/api/video-submissions", videoSubmissionRoutes);

// Graphic Design Requests
app.use("/api/design-requests", designRequestRoutes);

// Photography Requests (NEW)
app.use("/api/photo-submissions", photographySubmissionRoutes);

export default app;
