import express from "express";
///////////////////////////////////////
import { sql } from "../database";

export const customersRouter = express.Router();

customersRouter.get("/", async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
});

customersRouter.post("/", async (request, response) => {
  const { firstname, lastname, email, addres } = request.body;
  console.log(request.body);
  try {
    console.log("first");
    await sql`INSERT INTO customers (firstname, lastname, email, addres)
            VALUES (${firstname}, ${lastname}, ${email}, ${addres})`;
    console.log("second");

    response.status(200).json({ customer: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

customersRouter.put("/", async (request, response) => {
  const { firstname, lastname, email, addres, customerId } = request.body;
  console.log(request.body.customerId);
  try {
    await sql`UPDATE customers
    SET firstname = ${firstname}, lastname = ${lastname}, email = ${email}, addres = ${addres}
    WHERE customerId = ${customerId} `;
    response.status(200).json({ customer: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

customersRouter.delete("/", async (request, response) => {
  const { id } = request.body;
  console.log(request.body);
  try {
    await sql`DELETE FROM customers  WHERE customerid = ${id}`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
