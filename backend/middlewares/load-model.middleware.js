import * as qna from "@tensorflow-models/qna";
import * as tf from "@tensorflow/tfjs-node";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Load the model asynchronously and cache it
let model;

export const loadModel = asyncHandler(async (req, _, next) => {
  if (!model) {
    try {
      model = await qna.load();
      console.log("Model loaded successfully");
    } catch (error) {
      console.error("Error loading the model:", error);
      throw new ApiError(500, "Failed to load the model");
    }
  }
  req.model = model;
  next();
});
