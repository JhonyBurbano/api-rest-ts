import { Request, Response, Router } from "express";
import {
  get,
  getList,
  post,
  remove,
  update,
} from "../controllers/items.controller";

const router = Router();

router.get("/", getList);
router.get("/:id", get);
router.post("/", post);
router.put("/:id", update);
router.delete("/:id", remove);

export { router };
