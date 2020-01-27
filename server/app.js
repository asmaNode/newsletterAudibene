import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import bodyParser from 'body-parser';
import cors from 'cors';
import swagger from './config/swagger';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';
import  database from "./config/database";

//Cros domain
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Swagger API documentation
app.get('/swagger.json', (req, res) => {
    res.json(swagger);
});

// Router
app.use('/api', routes);

// Landing page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Joi Error Handler
app.use(joiErrorHandler);



/****
 * Send Email newsletter
 */
var newsletterMailer = require('./config/mailer');
var schedule = require('node-schedule');
//uncomment this to cancel Job
//schedule.cancelJob();
//Start the job every day at 8: am (7 with GMT)
schedule.scheduleJob('* 0 7 * * *', newsletterMailer);

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

app.listen(app.get('port'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});


export default app;
