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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_models_1 = require("../models/product.models");
exports.productRoute = express_1.default.Router();
exports.productRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createBodyProduct = req.body;
        const productData = yield product_models_1.Product.create(createBodyProduct);
        res.status(201).send({
            success: true,
            messages: "Product create successfully",
            productData,
        });
    }
    catch (error) {
        res.status(404).send({
            success: false,
            message: "Product not creste successfully",
            error,
        });
    }
}));
exports.productRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = yield product_models_1.Product.find();
        res.status(201).send({
            success: true,
            message: "Data create successfully",
            productData,
        });
    }
    catch (error) {
        res.status(201).send({
            success: true,
            message: "Data not create successfully",
            error,
        });
    }
}));
exports.productRoute.patch("/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateProductBody = req.body;
        const updateProductId = req.params.productId;
        const updateProductData = yield product_models_1.Product.findByIdAndUpdate(updateProductId, updateProductBody, { new: true });
        res.status(201).send({
            success: true,
            message: "Product update successfully",
            updateProductData,
        });
    }
    catch (error) {
        res.status(404).send({
            success: false,
            message: "Sorry product not update",
            error,
        });
    }
}));
exports.productRoute.delete("/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteProductId = req.params.productId;
        const deleteProductData = yield product_models_1.Product.findByIdAndDelete(deleteProductId);
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
    }
    catch (error) {
        res.status(404).send({
            success: false,
            message: "Sorry product don't delete",
            error,
        });
    }
}));
