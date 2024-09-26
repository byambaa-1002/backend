import express from "express";
///////////////////////////////////////
import { sql } from "../database";

export const OrdersRouter = express.Router();

OrdersRouter.get("/", async (_request, response) => {
  const Orders = await sql`SELECT * FROM orders`;

  response.status(200).json({
    data: Orders,
  });
});

OrdersRouter.post("/", async (request, response) => {
  const { orderid, customerid, Productid, quantity } = request.body;
  console.log(request.body);
  try {
    console.log("first");
    await sql`INSERT INTO Orders (orderid, customerid, Productid, quantity)
            VALUES (${orderid}, ${customerid}, ${Productid}, ${quantity})`;
    console.log("second");

    response.status(200).json({ Orders: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

OrdersRouter.put("/", async (request, response) => {
  const { orderid, customerid, Productid, quantity } = request.body;
  console.log(request.body.Ordersid);
  try {
    await sql`UPDATE Orders
    SET orderid = ${orderid}, customerid = ${customerid}, Prodactid = ${Productid}, quantity = ${quantity}
    WHERE orderid = ${orderid} `;
    response.status(200).json({ Orders: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

OrdersRouter.delete("/", async (request, response) => {
  const { id } = request.body;
  console.log(request.body);
  try {
    await sql`DELETE FROM Orders  WHERE orders.orderid= ${id}`;

    response.status(200).json({ Orders: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
