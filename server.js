const express = require('express');

const router = express.Router();
const cors = require('cors');

const nodemailer = require('nodemailer');

const app = express();
app.use(cors('*'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
  res.header('Access-Control-Expose-Headers', 'Access-Token, Uid');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // response to preflight request
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  host: 'gmail.com',
  port: 465,
  secure: true,
 
  auth: {
    type: 'custom',
    method: 'MY-CUSTOM-METHOD',
    user: 'clement.charlesC@gmail.com',
    pass: process.env.pass,
  },
});


contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  const { message } = req.body;
  const mail = {
    from: name,
    to: 'clement.charlesC@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    }
    else {
      res.json({ status: 'Message Sent' });
    }
  });
});
