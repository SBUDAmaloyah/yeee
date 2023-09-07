const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Choose a port for your server

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML file is in the 'public' directory

app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'your_email@example.com', // Your email address
      pass: 'your_email_password' // Your email password or app-specific password
    }
  });

  const mailOptions = {
    from: 'your_email@example.com', // Sender's email address
    to: 'truehermeneutics@outlook.com', // Recipient's email address
    subject: 'New Message from Contact Form',
    text: `Email: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
