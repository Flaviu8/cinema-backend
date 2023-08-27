export const listScheduleQuery = `
SELECT
	a.id,
	b.title,
	a.movie_id,
	date(start_time),
	SUBSTRING(start_time::text, 12, 5) as time,
	a.room_id,
	a. "language",
	a.three_dimensional,
	a.imax
FROM
	calendar a
	INNER JOIN movies b ON a.movie_id = b.id
WHERE
	a.movie_id = $1`;

	export const getScheduleQuery = `
	SELECT
		a.id,
		b.title,
		a.movie_id,
		date(start_time),
		SUBSTRING(start_time::text, 12, 5) as time,
		a.room_id,
		a. "language",
		a.three_dimensional,
		a.imax
	FROM
		calendar a
		INNER JOIN movies b ON a.movie_id = b.id
	WHERE
		a.id = $1`;
	
	