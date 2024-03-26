import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ data: "AQUI VA LOS MODELOS" });
});

export { router };
