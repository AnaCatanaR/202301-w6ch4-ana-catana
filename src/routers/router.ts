import { Router } from "express";
import {
  getKnownThings,
  getKnownThingById,
} from "../controler/thingsControler.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getKnownThings);
thingsRouter.get("/things/:idThing", getKnownThingById);
