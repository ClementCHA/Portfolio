const express = require('express');

const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

const app = express();
app.use(cors("*"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept" Authorization');
  res.header('Access-Control-Expose-Headers', 'Access-Token, Uid');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
app.use(express.json());
app.use('/', router);
app.listen(PORT, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    refreshToken:process.env.REFRESH_TOKEN,
    accessToken:process.env.ACCESS_TOKEN,
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
      console.log(error)
      res.json({ status: 'ERROR' });
    }
    else {
      res.json({ status: 'Message Sent' });
    }
  });
});
