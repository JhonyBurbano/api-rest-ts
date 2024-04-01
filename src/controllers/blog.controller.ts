import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const get = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};
const getList = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_LIST_BLOG");
  }
};
const post = ({ body }: Request, res: Response) => {
  try {
    // const body = req.body;
    console.log("aaaa ", body);
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};
const update = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};
const remove = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_REMOVE_BLOG");
  }
};

export { get, getList, post, update, remove };
