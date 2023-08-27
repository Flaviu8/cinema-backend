export const listCalendarQuery = "SELECT * FROM calendar";
export const getCalendarByIdQuery = "SELECT * FROM calendar WHERE id = $1";
export const createCalendarQuery = `INSERT INTO calendar (
  movie_id,
  start_time,
  end_time,
  room_id,
  language,
  three_dimensional,
  imax
) VALUES ($1, $2, $3, $4, $5, $6, $7 )`;

export const updateCalendarQuery =
  "UPDATE calendar SET movie_id = $1, start_time = $2, end_time = $3, room_id = $4, language = $5, three_dimensional = $6, imax = $7  where id = $8";

export const partialUpdateCalendarQuery = function (body, id) {
  const params = [];
  const paramValues = [];
  let paramCount = 1;
  for (const key in body) {
    if (body[key] !== undefined) {
      params.push({
        key: key,
        param: `$${paramCount}`,
      });
      paramValues.push(body[key]);
      paramCount++;
    }
  }
  paramValues.push(id);
  const queryParams = params.map((x) => {
    return `${x.key} = ${x.param}`;
  });
  const query = `
  UPDATE 
    calendar 
  SET ${queryParams}
  WHERE id = $${paramCount}`;

  return { query, params: paramValues };
};

export const deleteCalendarQuery = "DELETE FROM calendar where id = $1";
