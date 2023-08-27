import express from "express"
import { pool } from "../db.js";
import { getUsersQuery} from "./queries.js"
import bcrypt from "bcrypt"



const router = express.Router()

router.get("/", (req, res) => {
    pool.query(getUsersQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
   })


   router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT password_hash FROM users WHERE email = $1`;
    const values = [email];

    pool.query(query, values, (error, result) => {
      if (error) throw error;
      if (result.rows.length === 0) {
         res.status(400).json("Email not found")
          return;
      }
      const password_hash = result.rows[0].password_hash;
      bcrypt.compare(password, password_hash, function(err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            res.status(201).json("You're logged in!")
          } else {
            res.status(401).json("Password is wrong! ")
          }
      })
  })
})



export default router

