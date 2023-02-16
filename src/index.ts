import "./loadEnviroments.js";
import express from "express";

const port = process.env.PORT;
const app = express();

app.get("/things", (req, res) => {
  res.status(200).json({ id: 1, things: "API REST Things I already know" });
});

app.listen(port, () => {});
