const express = require('express');

const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
}) 
app.use(express.json());
app.use('/', router);
app.listen(PORT, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    clientId: '585879763425-0fl98katsqvcfvqm88choik5cik0rka5.apps.googleusercontent.com',
    clientSecret: '3grAuR8URlAWrfReN0B53Piw',
    refreshToken: '1//04WL58Y3ffRXhCgYIARAAGAQSNwF-L9IrRDAKJFKdgLHbzvOqomSdWzGhe02VQQjYw3gHI_FnwmzsCL-c1DwmoTW6ExGe3xIrA9k',
    accessToken: 'ya29.a0ARrdaM-Q_FRZP1SdSbLtaw3o3aoL0Dat0DGXr3EjjrD15_XbvDlX9YPQF4YPsQsbMHx4XmHLhOFWP44ho19HeDGN7LBgMj56wlZJn22on8mKh0KY9Sdcj9PuBvqH5yE0N2UcK8Fo5qUPSXVFwqO-F0_dZJ3m'
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
