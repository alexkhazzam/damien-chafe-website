const Express = require('express');
const Router = Express.Router();

const homeController = require('../controllers/homeController');
const contactController = require('../controllers/contactController');
const helpController = require('../controllers/helpController');

Router.get('/', homeController.getHomePage);
Router.get('/contact', contactController.getContactPage);
Router.get('/help', helpController.getHelpPage);
Router.post('/help', helpController.postHelpPage);

module.exports = Router;
