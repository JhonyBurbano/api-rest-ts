import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import db from "./config/mongo";
const PORT = process.env.PORT || 3001;
console.log(`conexion. ---- ${process.env.DB_URI}`);

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("ready mongo"));

app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`));
