import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

const indexRouter = express.Router();

app.use(cors());
app.use('/', indexRouter);

indexRouter.get('/', async (req, res) => {
  console.log('hello flyio');
  const response = await (
    await fetch('https://yts.mx/api/v2/list_movies.json')
  ).json();
  return res.json({ movies: response.data.movies });
});

indexRouter.get('/hello', (req, res) => {
  return res.json({ message: 'Hello Fly.io Server !!!' });
});

app.listen(PORT, () => `✅ ${PORT} port server connected success`);
