import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';


import constant from '../config/directory';

const app = express();


app.set('port',  process.env.APP_PORT || 3000);
app.set('host',  process.env.APP_HOST || 'localhost');

app.use(express.static(constant.distDir));


app.use(cors());
app.use(helmet());
app.use(compression());

app.use(bodyParser.json());

app.use(express.static(constant.assetsDir));
app.use('*/images',express.static('public/images'));



export default app;