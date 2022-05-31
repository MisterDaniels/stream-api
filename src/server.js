require('dotenv').config();
var session = require('express-session');
const { errors } = require('celebrate');
const MongoStore = require('connect-mongo');

const app = require('./app');
const routes = require('./routes');
require('./database/setup');

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL
    })
}));

app.use(routes);

app.use(errors());

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('Server online');
});