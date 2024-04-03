import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const tokenByUser = req.headers.authorization || null;
    const token = tokenByUser?.split(" ").pop();
    if (!token) {
      res.status(400);
      res.send("TOKEN_NOT_SEND");
    }
    const isUser = verifyJwt(`${token}`);
    if (!isUser) {
      res.status(401);
      res.send("TOKEN_NOT_VALID");
    } else {
      console.log(isUser);
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESSION_NO_VALID");
  }
};

export { checkSession };
