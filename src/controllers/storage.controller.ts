import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage.service";
import RequestExt from "../interfaces/req-ext.interface";
import { IStorage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: IStorage = {
      fileName: `${file?.fieldname}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const result = await registerUpload(dataToRegister);
    res.send(result);
  } catch (error) {
    handleHttp(res, "ERR_GET_FILE");
  }
};

export { getFile };
