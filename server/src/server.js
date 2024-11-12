import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello");
    });
    app.listen(PORT, () => {
      console.log(`server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });
