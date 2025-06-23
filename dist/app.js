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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const product_controlers_1 = require("./app/controllers/product.controlers");
exports.app = (0, express_1.default)();
// app.use(cors());
exports.app.use(express_1.default.json());
// routes
exports.app.use("/products", product_controlers_1.productRoute);
exports.app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).send({
            success: true,
            message: "you are access in database",
        });
    }
    catch (error) {
        res.status(404).send({
            success: false,
            message: "your not access in database",
            error,
        });
    }
}));
