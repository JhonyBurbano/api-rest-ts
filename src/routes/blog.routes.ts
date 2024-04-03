import { Request, Response, Router } from "express";
import {
  get,
  getList,
  post,
  remove,
  update,
} from "../controllers/blog.controller";
import { logMiddleware } from "../middleware/log.middleware";

const router = Router();

router.get("/", getList);
router.get("/:id", logMiddleware, get);
router.post("/", post);
router.put("/:id", update);
router.delete("/:id", remove);

export { router };
