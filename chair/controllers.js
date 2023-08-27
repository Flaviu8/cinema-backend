import { listChairQuery, updateChairQuery } from "./queries.js";
import { pool } from "../db.js";

// LIST chairs by calendar id
export const listChairsByCalendar = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(listChairQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
// LIST updated chairs by calendar id
export const updateSeatsById = (req, res) => {
  const ids = req.body.seat_ids;
  pool.query(updateChairQuery, [ids], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rowCount);
  });
};
