import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("esto es un middleware de log");
  next();
};

export { logMiddleware };
