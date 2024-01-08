import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const response = await (
    await fetch('https://yts.mx/api/v2/list_movies.json')
  ).json();
  return res.status(304).json({ movies: response.data.movies });
});

indexRouter.get('/hello', (req, res) => {
  return res.json({ message: 'Hello Fly.io Server !!!' });
});

module.exports = indexRouter;
