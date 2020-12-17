const websiteNotifications = require('../models/websiteNotifications/websiteNotifications');
const pings = require('../models/websiteNotifications/pingModel');

exports.getHomePage = (req, res, next) => {
  const PingModel = new pings.pingModel();
  pings.pingModel.writePing();
  res.render('home', {
    websitePingCount: PingModel.fetchPings(),
  });

  //   const websiteNotifications = new websiteNotifications.contactModel();
  //   HomePageModel.sendEmail()
  //     .then((data) => {
  //       if (data) {
  //         console.log(data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       throw err;
  //     });
};
