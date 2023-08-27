import express from "express"
import { pool } from "../db.js";
import { createUsersRegister, getUsersQueryRegister } from "./queries.js"
import bcrypt from "bcrypt"


const router = express.Router()


router.get("/", (req, res) => {
    pool.query(getUsersQueryRegister, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
   })

   router.post("/", async (req, res) => {
    try {
      const { gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms} = req.body
     
      const saltRounds = 10;
  
      const emailQuery = "SELECT * FROM users WHERE email = $1";
      const emailValues = [email];
  
      pool.query(emailQuery, emailValues, async function(err, result) {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }
  
        if (result.rowCount > 0) {
          return res.status(400).json({ message: "Email already exists" });
        }
  
        bcrypt.hash(password, saltRounds, function(err, hash) {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
          }

          const data = [gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms, hash]

          pool.query(createUsersRegister, data, function(err, result) {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: "Internal server error" });
            }
  
            return res.status(201).json({ message: "User created" });
          });
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });


















// router.post("/",  (req, res) => {
//  const saltRounds = 10;
// try {

//  bcrypt.hash(password, saltRounds, function(err, hash) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//     const query = "INSERT INTO users (email, password_hash) VALUES ($1, $2)";
//     const values = [email, hash];

//     pool.query(query, values, function(err, result) {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Internal server error" });
//       }

//       return res.status(201).json({ message: "User created" });
//     });
//   });
// } catch (err) {
//   console.error(err);
//   res.status(500).json({ message: "Internal server error" });
// } finally {
//   client.end();
// }

// })

// const { gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms} = req.body
//  const data = [gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms]

//  pool.query(`SELECT * FROM users WHERE email = '${email}'`, (error, result) => {
//         if(error) {
//             throw error
//         } 
        
        
         
    
//      if (result.rows.length > 0) {
//         res.status(400).send({ error: 'Email already exists' });
//       } 
//       else{
//         pool.query(createUsersRegister, data, (error, results) => {
//             if(error) throw error;
//             result.setHeader('Content-Type', 'application/json');
//             results.status(201).send('The user was successfully created');
//         })
  
//         res.send({ message: 'Successful registration' });
//       }

//     })



export default router