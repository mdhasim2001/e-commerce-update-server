"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
}, {
    versionKey: false,
    timestamps: true,
});
productSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        this.available = this.stock === 0 ? false : true;
    });
});
// const ecommerceProductCollection = MongoClient.db("ECommerceProducts").collection("products")
exports.Product = (0, mongoose_1.model)("Product", productSchema);
