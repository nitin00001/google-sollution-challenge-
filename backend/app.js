import express, { urlencoded } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import router from './routes/paymentRouter.js';
config({path: './cofig/config.env'});

export const app = express();
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cors());

app.use("/api", router);