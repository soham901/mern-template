import express from "express";
import mongoose from "mongoose";

// Load environment variables
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/express-ts";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to DB and start server
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to DB");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB");
    console.log("err: ", err);
  });
