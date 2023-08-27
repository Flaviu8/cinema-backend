import express from "express";
import {
  createCalendar, deleteCalendar, getCalendars,
  getCalendarsById, updateCalendar
} from "./controllers.js";

const router = express.Router();

router.get("/", getCalendars);
router.get("/:id", getCalendarsById);
router.post("/", createCalendar);
router.put("/:id", updateCalendar);
router.delete("/:id", deleteCalendar);

export default router;
