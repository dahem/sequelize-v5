import moment from 'moment';
import 'moment/locale/pt-br';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';

moment.locale('pt-BR');

const app = express();
app.keepAliveTimeout = process.env.APP_TIME_TO_DISCONNECT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use((error, req, res) => res.status(500).send({ error }));

export default app;
