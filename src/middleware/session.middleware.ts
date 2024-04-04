import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt.handle";
import RequestExt from "../interfaces/req-ext.interface";

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const tokenByUser = req.headers.authorization || null;
    const token = tokenByUser?.split(" ").pop();
    if (!token) {
      res.status(400);
      res.send("TOKEN_NOT_SEND");
    }
    const isUser = verifyJwt(`${token}`) as Object;
    if (!isUser) {
      res.status(401);
      res.send("TOKEN_NOT_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESSION_NO_VALID");
  }
};

export { checkSession };
