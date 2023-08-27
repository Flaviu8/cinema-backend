import { pool } from "../db.js";
import { getPayCardQuery, createPayCardQuery } from "./PayQueries.js";

export const getPayCard = (req, res) => {
  pool.query(getPayCardQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

export const createPayCard = (req, res) => {
  const { name, number, expiry, cvc } = req.body;

  pool.query(
    createPayCardQuery,
    [name, number, expiry, cvc],
    (error, results) => {
      if (error) throw error;

      res.status(201).json({
        message: "Paymend card was succesfully created",
      });
    }
  );
};
