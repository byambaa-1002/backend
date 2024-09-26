import express from "express";
import { customersRouter } from "./router/customers";
import { OrdersRouter } from "./router/Orders";
import { ProductsRouter } from "./router/Products";
import { justomersRouter } from "./router/justomers";
const app = express();

app.use(express.json());

const port = 8080;

app.use("/customers", customersRouter);
app.use("/Orders", OrdersRouter);
app.use("/Products", ProductsRouter);
app.use("/justomers", justomersRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}
