import { Router } from "express";
import qnaRouter from "./qna.route.js";

const router = Router();

router.use("/qna", qnaRouter);

export default router;
