import express from 'express';
import authRoute from './routes/auth.routes.js';
import logger from './config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined', {stream: {write: (message) =>{
  logger.info(message.trim());
}} }));
app.use(cookieParser());
app.use(cors());


app.get('/', (req, res) => {
  logger.info('Welcome to Acquisitions!');
  res.status(200).send('Welcome to Acquisions!');
} );

app.use('/api/v1/auth', authRoute);


export default app;