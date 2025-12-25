import express from 'express';
import authRoute from './routes/auth.routes.js';

const app = express();


app.get('/', (req, res) => {
  res.status(200).send('Welcome to Acquisions!');
} );

app.use('/api/v1/auth', authRoute);


export default app;