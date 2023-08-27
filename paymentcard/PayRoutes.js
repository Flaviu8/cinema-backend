import express from "express";
import { getPayCard, createPayCard } from "./PayControllers.js";

const router = express.Router();

router.get("/", getPayCard);
router.post("/", createPayCard);
export default router;
