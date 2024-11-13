import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/user", userRouter);

export default app;
