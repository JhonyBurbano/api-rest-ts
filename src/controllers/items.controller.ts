import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getItem,
  getItems,
  insert,
  updateItem,
  removeItem,
} from "../services/items.service";
import { JwtPayload } from "jsonwebtoken";
interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const get = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await getItem(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};
const getList = async (req: RequestExt, res: Response) => {
  try {
    const response = await getItems();
    res.send({ items: response, user: req.user });
  } catch (error) {
    handleHttp(res, "ERROR_GET_LIST_ITEM");
  }
};
const post = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const response = await insert(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error as Error);
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const response = await updateItem(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await removeItem(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_REMOVE_ITEM");
  }
};

export { get, getList, post, update, remove };
