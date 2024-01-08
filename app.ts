import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use('/', require('./index'));

app.listen(PORT, () => `✅ ${PORT} port server connected success`);
