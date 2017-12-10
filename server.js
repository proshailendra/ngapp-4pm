const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    routes = require('./routes'),
    expressSession = require('express-session');

const app = express();

//application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//session
app.use(expressSession({
    secret: 'mytoken',
    saveUninitialized: true,
    resave: true
}));
app.use(express.static(path.join(__dirname, './client')));

//routes
app.use('/', routes);

const port = process.env.PORT || 1300;
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});