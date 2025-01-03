import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import * as tf from "@tensorflow/tfjs-node";
import * as qna from "@tensorflow-models/qna";
import routes from "./routes/index";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



app.use("/", routes)

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

export { app };
