import { pool } from "../db.js";
import { createCalendarQuery, deleteCalendarQuery, getCalendarByIdQuery, listCalendarQuery, partialUpdateCalendarQuery, updateCalendarQuery } from "./queries.js";

// GET simple
export const getCalendars = (req, res) => {
  pool.query(listCalendarQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// GET using ID
export const getCalendarsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getCalendarByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows[0]);
  });
};


//POST
export const createCalendar = (req, res) => {
  const {
    movie_id,
    start_time,
    end_time,
    room_id,
    language,
    three_dimensional,
    imax,
  } = req.body;
  pool.query(
    createCalendarQuery,
    [
      movie_id,
      start_time,
      end_time,
      room_id,
      language,
      three_dimensional,
      imax,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("The Calendar was created.");
    }
  );
};

//UPDATE PARTIAL
export const updateCalendar = (req, res) => {
  const id = parseInt(req.params.id);
  const {query, params} = partialUpdateCalendarQuery(req.body, id);
  pool.query(
    query,
    params,
    (error, results) => {
      if (error) throw error;
      res.status(200).send("The Calendar was updated.");
    }
  );
};

// UPDATE
export const updateCalendarBkp = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    movie_id,
    start_time,
    end_time,
    room_id,
    language,
    three_dimensional,
    imax
  } = req.body;
  pool.query(
    updateCalendarQuery,
    [
      movie_id,
      start_time,
      end_time,
      room_id,
      language,
      three_dimensional,
      imax,
      id
    ],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("The Calendar was updated.");
    }
  );
};

//DELETE
export const deleteCalendar = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(deleteCalendarQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("The Calendar was deleted.");
  });
};
