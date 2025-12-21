import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder , userOrders, listOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", authMiddleware, placeOrder);
orderRouter.post("/verifyorder", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/listorders", authMiddleware, listOrders);

export default orderRouter;
