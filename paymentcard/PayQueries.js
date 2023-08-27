export const getPayCardQuery = "SELECT * FROM paymentcard";
export const createPayCardQuery =
  "INSERT INTO paymentcard ( name, number, expiry, cvc) VALUES  ($1, $2, $3, $4)";
