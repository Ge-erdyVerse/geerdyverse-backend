import express from "express";
import cors from "cors";
import submissionsRoutes from "./routes/submissionsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Geerdyverse Backend Running");
});

app.use("/api/submissions", submissionsRoutes);

export default app;
