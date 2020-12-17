const nodemailer = require('nodemailer');

exports.contactModel = class HandleForm {
  constructor(email, firstname, lastname, message, purpose) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.message = message;
    this.purpose = purpose;
    this.curse = 'non';
  }
  async wrappedSendMail(mailOptions) {
    const promise = new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'nhsforeignaffairs@gmail.com',
          pass: 'foreignaffairs232',
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
    mailOptions = {
      from: 'unknown',
      to: 'nhsforeignaffairs@gmail.com',
      subject: 'Entertainment Page Suggestion',
      text: this.email,
    };
    let response = await this.wrappedSendMail(mailOptions);
    return response;
  }
  async sendGenerateCode() {
    let mailOptions = {
      from: 'nhsforeignaffairs@gmail.com',
      to: this.email,
      subject: 'Attendance Code Generated!',
      text:
        'Enter this code to mark your attendance for all meetings to follow',
    };
    let response = await this.wrappedSendMail(mailOptions);
    return response;
  }
};
