const nodemailer = require('nodemailer');

exports.websiteNotifications = class HandleForm {
  constructor() {}
  async wrappedSendMail(mailOptions) {
    const promise = new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'dcwebsitenotifications@gmail.com',
          pass: 'password',
        },
      });
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
    return promise;
  }
  async sendEmail() {
    console.log('hi');
    let mailOptions = {
      from: 'dcwebsitenotifications@gmail.com',
      to: 'dcwebsitenotifications@gmail.com',
      subject: 'Website Pinged!',
      text: 'Someone pinged our website.',
    };
    return await this.wrappedSendMail(mailOptions);
  }
};
