import {
  createMovieQuery,
  deleteMovieQuery,
  getMovieByIdQuery,
  listMovieQuery,
  listMovieBannerQuery,
  partialUpdateMovieQuery,
  updateMovieQuery,
  listMovieVideoUrlQuery,
} from "../movies/queries.js";
import { pool } from "../db.js";

// GET simple
export const getMovies = (req, res) => {
  pool.query(listMovieQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// GET banner
export const getMoviesBanner = (req, res) => {
  pool.query(listMovieBannerQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// GET video_url
export const getMoviesVideoUrl = (req, res) => {
  pool.query(listMovieVideoUrlQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// GET using ID
export const getMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getMovieByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows[0]);
  });
};

//POST
export const createMovie = (req, res) => {
  const {
    title,
    description,
    rating,
    start_date,
    end_date,
    genre,
    img_url,
    banner_url,
    video_url,
  } = req.body;
  pool.query(
    createMovieQuery,
    [
      title,
      description,
      rating,
      start_date,
      end_date,
      genre,
      img_url,
      banner_url,
      video_url,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("The Movie was created.");
    }
  );
};

//UPDATE
export const updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const {query, params} = partialUpdateMovieQuery(req.body, id);
  pool.query(
    query,
    params,
    (error, results) => {
      if (error) throw error;
      res.status(200).send("The Movie was updated.");
    }
  );
};

export const updateMovieBkp = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    title,
    description,
    rating,
    start_date,
    end_date,
    genre,
    img_url,
    banner_url,
    video_url,
  } = req.body;
  pool.query(
    updateMovieQuery,
    [
      title,
      description,
      rating,
      start_date,
      end_date,
      genre,
      img_url,
      banner_url,
      video_url,
      id,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("The Movie was updated.");
    }
  );
};

//DELETE
export const deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(deleteMovieQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("The Movie was deleted.");
  });
};
