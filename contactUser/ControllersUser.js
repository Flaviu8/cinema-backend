import { pool } from "../db.js";
import { getUsersQuery, createUsersQuery } from "./QeriesUser.js";

export const getUsers = (req, res) => {
  pool.query(getUsersQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

export const createUser = (req, res) => {
  const { username, user_email, user_message } = req.body;

  pool.query(
    createUsersQuery,
    [username, user_email, user_message],
    (error, results) => {
      if (error) throw error;

      res.status(201).json({
        message: "The message is send sucssesfully",
      });
    }
  );
};
