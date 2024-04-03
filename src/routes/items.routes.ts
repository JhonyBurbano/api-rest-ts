import { Request, Response, Router } from "express";
import {
  get,
  getList,
  post,
  remove,
  update,
} from "../controllers/items.controller";
import { logMiddleware } from "../middleware/log.middleware";
import { checkSession } from "../middleware/session.middleware";

const router = Router();

router.get("/", checkSession, getList);
router.get("/:id", logMiddleware, get);
router.post("/", post);
router.put("/:id", update);
router.delete("/:id", remove);

export { router };
