import { Router } from "express";
import { getAnswer } from "../controller/qna.controller";
import { loadModel } from "../middlewares/load-model.middleware";

const router = Router();

router.route("/update-account").post(loadModel, getAnswer);

export default router;
