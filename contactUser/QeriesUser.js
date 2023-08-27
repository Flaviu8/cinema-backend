export const getUsersQuery = "SELECT * FROM username";
export const createUsersQuery =
  "INSERT INTO username ( username, user_email,  user_message) VALUES  ($1, $2, $3)";
