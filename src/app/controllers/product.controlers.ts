import express, { Request, Response } from "express";
import { Product } from "../models/product.models";

export const productRoute = express.Router();

productRoute.post("/", async (req: Request, res: Response) => {
  try {
    const createBodyProduct = req.body;
    const productData = await Product.create(createBodyProduct);
    res.status(201).send({
      success: true,
      messages: "Product create successfully",
      productData,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Product not creste successfully",
      error,
    });
  }
});

productRoute.get("/", async (req: Request, res: Response) => {
  try {
    const productData = await Product.find();
    res.status(201).send({
      success: true,
      message: "Data create successfully",
      productData,
    });
  } catch (error) {
    res.status(201).send({
      success: true,
      message: "Data not create successfully",
      error,
    });
  }
});

productRoute.patch("/:productId", async (req: Request, res: Response) => {
  try {
    const updateProductBody = req.body;
    const updateProductId = req.params.productId;
    const updateProductData = await Product.findByIdAndUpdate(
      updateProductId,
      updateProductBody,
      { new: true }
    );
    res.status(201).send({
      success: true,
      message: "Product update successfully",
      updateProductData,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Sorry product not update",
      error,
    });
  }
});

productRoute.delete("/:productId", async (req: Request, res: Response) => {
  try {
    const deleteProductId = req.params.productId;
    const deleteProductData = await Product.findByIdAndDelete(deleteProductId);
    if (deleteProductData) {
      res.status(201).send({
        success: true,
        message: "Product delete successfully",
        deleteProductData,
      });
    }

    res.status(404).send({
      success: false,
      message: `${deleteProductId} is not found`,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Sorry product don't delete",
      error,
    });
  }
});
