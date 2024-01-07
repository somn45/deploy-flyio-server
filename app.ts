import experss from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = experss();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', async (req, res) => {
  console.log('hello flyio');
  const response = await (
    await fetch('https://yts.mx/api/v2/list_movies.json')
  ).json();
  return res.json({ movies: response.data.movies });
});

app.get('/hello', (req, res) => {
  return res.json({ message: 'Hello Fly.io Server !!!' });
});

app.listen(PORT, () => `✅ ${PORT} port server connected success`);
