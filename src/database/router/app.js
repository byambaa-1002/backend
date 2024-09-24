import express from "express";
import { getPgVersion } from "../../database/index";

const app = express();

app.use(express.json());

const port = 8000;

getPgVersion();

app.listen(port, () => {
  console.log(`server is running at http://localhost/${port}`);
});
