export const listMovieQuery = "SELECT * FROM movies";
export const listMovieBannerQuery = `SELECT * FROM movies where banner_url IS NOT NULL AND banner_url !='';`;
export const listMovieVideoUrlQuery = `SELECT * FROM movies where video_url IS NOT NULL AND video_url !='';`;
export const getMovieByIdQuery = "SELECT * FROM movies WHERE id = $1";
export const createMovieQuery = `INSERT INTO movies (
  title,
  description,
  rating,
  start_date,
  end_date,
  genre,
  img_url,
  banner_url,
  video_url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 )`;

export const updateMovieQuery =
  "UPDATE movies SET title = $1, description = $2, rating = $3, start_date = $4, end_date = $5, genre = $6, img_url = $7 , banner_url = $8, video_url = $9 where id = $10";

export const partialUpdateMovieQuery = function (body, id) {
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
    movies 
  SET ${queryParams}
  WHERE id = $${paramCount}`;

  return { query, params: paramValues };
};

export const deleteMovieQuery = "DELETE FROM movies where id = $1";
