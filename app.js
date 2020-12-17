const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public')));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
  res.render('home.ejs', {});
});

module.exports = app;
