import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';
import morgan from 'morgan';

module.exports = ()=>{
    const app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    consign()
    .include('./server/routes')
    .into(app);

    return app;
}