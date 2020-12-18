const Express = require('express');
const Router = Express.Router();

const homeController = require('../controllers/homeController');
const contactController = require('../controllers/contactController');
const helpController = require('../controllers/helpController');
const whyController = require('../controllers/whyController');
const lessonPaymentController = require('../controllers/LessonPaymentController');
const reviewController = require('../controllers/reviewController');
const leaveReviewController = require('../controllers/leaveReviewController');

Router.get('/', homeController.getHomePage);
Router.get('/contact', contactController.getContactPage);
Router.get('/help', helpController.getHelpPage);
Router.get('/why', whyController.getWhyMePage);
Router.post('/help', helpController.postHelpPage);
Router.get('/reviews', reviewController.getReviewPage);
Router.get('/lesson-payment', lessonPaymentController.getLessonPaymentPage);
Router.get('/leave-review', leaveReviewController.getLeaveReviewPage);

module.exports = Router;
