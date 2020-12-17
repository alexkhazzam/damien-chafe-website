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
          pass: 'tennisfanatic',
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
    this.mailOptions = {
      from: 'dcwebsitenotifications@gmail.com',
      to: 'dcwebsitenotifications@gmail.com',
      subject: 'Website Pinged!',
      text: 'Someone pinged our website.',
    };
    let response = await this.wrappedSendMail(this.mailOptions);
    return response;
  }
};
