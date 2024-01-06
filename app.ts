import experss from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = experss();
const PORT = 3001;

app.use(cors());

app.get('/', async (req, res) => {
  const response = await (
    await fetch('https://yts.mx/api/v2/list_movies.json')
  ).json();
  return res.json({ movies: response.data.movies });
});

app.listen(PORT, () => `✅ ${PORT} port server connected success`);
