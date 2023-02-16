import "./loadEnviroments.js";
import express from "express";
import { thingsRouter } from "./routers/router.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", thingsRouter);

app.listen(port);
