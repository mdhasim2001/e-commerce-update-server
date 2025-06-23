import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoute } from "./app/controllers/product.controlers";

export const app: Application = express();

// app.use(cors());
app.use(express.json());

// routes
app.use("/products", productRoute);

app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(201).send({
      success: true,
      message: "you are access in database",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "your not access in database",
      error,
    });
  }
});
