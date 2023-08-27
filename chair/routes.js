import express from "express";
import { listChairsByCalendar, updateSeatsById } from "./controllers.js";

const router = express.Router();

router.get("/calendar/:id", listChairsByCalendar);
router.put("/update_seats", updateSeatsById);

export default router;
