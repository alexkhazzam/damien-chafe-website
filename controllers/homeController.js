const pings = require('../models/websiteNotifications/pingModel');
const notifs = require('../models/websiteNotifications/websiteNotifications');

exports.getHomePage = (req, res, next) => {
  const PingModel = new pings.pingModel();
  pings.pingModel.writePing();
  res.render('home', {
    websitePingCount: PingModel.fetchPings(),
  });

  // const WebsiteNotifications = new notifs.websiteNotifications();
  // WebsiteNotifications.sendEmail()
  //   .then((data) => {
  //     if (data) {
  //       console.log(data);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     throw err;
  //   });
};
