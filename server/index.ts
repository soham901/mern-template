import express from "express";
import mongoose from "mongoose";

// Load environment variables
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.log("No DB_URL provided");
  process.exit(1);
}

if (DB_URL == "RUN WITHOUT DB") {
  console.log("Running without DB");
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to DB and start server

if (DB_URL == "RUN WITHOUT DB") {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} else {
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
}
