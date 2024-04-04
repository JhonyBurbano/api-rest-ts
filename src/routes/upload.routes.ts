import { Router } from "express";
import { checkSession } from "../middleware/session.middleware";
import { getFile } from "../controllers/storage.controller";
import multerMiddleware from "../middleware/file.middleware";

const router = Router();

router.post("/", checkSession, multerMiddleware.single("myfile"), getFile);

export { router };
