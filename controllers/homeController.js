const homePageModel = require('../models/homeModel');

exports.getHomePage = (req, res, next) => {
  res.render('home', {});

  const HomePageModel = new homePageModel.contactModel();
  HomePageModel.sendEmail()
    .then((data) => {
      if (data) {
        console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
