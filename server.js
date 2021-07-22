const express = require('express');

const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());


app.use(express.json());
app.use('/', router);
app.listen(PORT, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  host: 'gmail.com',
  port: 465,
  secure: true,
 
  auth: {
    type: 'custom',
    method: 'MY-CUSTOM-METHOD',
    user: 'clement.charlesC@gmail.com',
    pass: process.env.PASS,
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
