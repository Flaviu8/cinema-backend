export const listChairQuery = `
SELECT 
  * 
FROM 
  calendar_chairs  a
WHERE
	a.calendar_id = $1
ORDER BY "row", "column"::int`;

export const updateChairQuery = `
  UPDATE calendar_chairs SET status='occupied' where id = ANY($1::int[])
`;
