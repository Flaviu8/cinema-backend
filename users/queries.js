export const createUsers = `INSERT INTO users (email, password) VALUES  ($1, $2)`;
export const getUsersQuery =  "SELECT * FROM users";
export const createUsersRegister = `INSERT INTO users (gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms, password_hash) VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
export const getUsersQueryRegister =  "SELECT * FROM users";

