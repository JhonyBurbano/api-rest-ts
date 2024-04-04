import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export default interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}
