import { Response } from "express";
const handleHttp = (res: Response, error: string, errorRaw?: object) => {
  console.log("Error Http ", errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
