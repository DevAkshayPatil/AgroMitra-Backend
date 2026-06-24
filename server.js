import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.listen(process.env.PORT || 3000, () => {
  if (process.env.NODE_ENV === "development") {
    console.log("Server is running on port "+ "localhost: http://localhost:" + (process.env.PORT || 3000));
  }
});