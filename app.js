const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public')));

const publicRoutes = require('./routes/publicRoutes');

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(publicRoutes);

module.exports = app;
