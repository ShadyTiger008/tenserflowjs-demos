import { Router } from "express";
import { getAnswer } from "../controller/qna.controller.js";
import { loadModel } from "../middlewares/load-model.middleware.js";

const router = Router();

router.post("/get-answer", loadModel, getAnswer);

export default router;
