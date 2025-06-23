import { model, Schema } from "mongoose";
import { IProduct } from "../interface/product.interface";
import { MongoClient } from "mongodb";

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: {
      type: Number,
      required: true,
      min: [0, "Price minima 1 TK"],
      trim: true,
    },
    discountPercentage: {
      type: Number,
      min: [0, "Discount Percentage minimam 1%"],
      trim: true,
    },
    rating: { type: Number, required: true, trim: true },
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock minimam 0 or 1"],
      trim: true,
    },
    available: { type: Boolean },
    brand: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    thumbnail: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

productSchema.pre("save", async function () {
  this.available = this.stock === 0 ? false : true;
});

// const ecommerceProductCollection = MongoClient.db("ECommerceProducts").collection("products")

export const Product = model("Product", productSchema);
