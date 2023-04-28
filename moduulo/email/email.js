
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'helisonoliveira27@gmail.com',
  auth: {
    user: 'helisonoliveira27@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'helisonoliveira27@ggmail.com',
  to: 'helisonoliveira27@ggmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});