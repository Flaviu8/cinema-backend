import express from "express";
import {
  getUpcomingSchedule,
  listUpcomingSchedule
} from "./controllers.js";

const router = express.Router();

router.get("/movies/:id", listUpcomingSchedule);
router.get("/:id", getUpcomingSchedule);

export default router;
