const Express = require('express');
const Router = Express.Router();

const homeController = require('../controllers/homeController');

Router.get('/', homeController.getHomePage);

module.exports = Router;
