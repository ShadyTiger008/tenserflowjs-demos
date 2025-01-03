import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

// Load the model asynchronously and cache it for later use
let model;

export const loadModel = asyncHandler(async (req, _, next) => {
  try {
    if (!model) {
      try {
        model = await qna.load();
        console.log("Model loaded successfully");
      } catch (error) {
        console.error("Error loading the model:", error);
      }
    }
    req.model = model;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
