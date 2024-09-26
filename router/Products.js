import express from "express";
///////////////////////////////////////
import { sql } from "../database";

export const ProductsRouter = express.Router();

ProductsRouter.get("/", async (_request, response) => {
  const Products = await sql`SELECT * FROM Products`;

  response.status(200).json({
    data: Products,
  });
});

ProductsRouter.post("/", async (request, response) => {
  const { productsId, productname, price } = request.body;
  console.log(request.body);
  try {
    console.log("first");
    await sql`INSERT INTO Products (productsId, productname, price)
            VALUES (${productsId}, ${productname}, ${price})`;
    console.log("second");

    response.status(200).json({ products: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

ProductsRouter.put("/", async (request, response) => {
  const { ProductsId, Productname, price } = request.body;
  console.log(request.body.ProductsId);
  try {
    await sql`UPDATE Products
    SET ProductsId = ${ProductsId}, Productname = ${Productname}, price = ${price}
    WHERE ProductsId = ${ProductsId} `;
    response.status(200).json({ Products: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

ProductsRouter.delete("/", async (request, response) => {
  const { id } = request.body;
  console.log(request.body);
  try {
    await sql`DELETE FROM products  WHERE products.productsid = ${id}`;

    response.status(200).json({ Products: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
