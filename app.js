//Simplest way to send one text using Twilio

//hide the config file from Github or you'll get a semi-nasty gram
// and comment out the config variable when pushing to heroku
const config = require("./config.js");
const express = require("express");
const app = express();
const router = express.Router();

//ngrok allows you to test your routes locally,
//technically it points traffic from a live url to your local server
const ngrok = require("ngrok");

const PORT = process.env.PORT || 3005;
const twilio = require("twilio");
const accountSid = process.env.SID || config.SID;
const authToken = process.env.AUTH_TOKEN || config.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.use(router);

//you can set a loop inside this and send a bunch of texts at once
router.get("/sms", function(request, response) {
  // start of for loop
        client.messages
          .create({
            body: `Whoa, awesome Lightning Talk.`,
            to: `+12072130205`,
            from: `+17203304081`
          })
          .then(message => console.log('sms log'));
  // end of for loop
      response.send(`hehehehe`);
    });

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
