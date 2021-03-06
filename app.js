'use strict'

require('dotenv').config()
const http = require('http');
const Bot = require('messenger-bot');

let bot = new Bot({
  token: process.env.FB_PAGE_TOKEN,
  verify: process.env.FB_VERIFY_TOKEN
});

bot.on('error', (err) => {
    console.log(err.message)
});

bot.on('message', (payload, reply) => {
  let text = payload.message.text;

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err;

    reply({ text }, (err) => {
      if (err) throw err;

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    });
  });
});

// SERVER
http.createServer(bot.middleware()).listen(4500);
console.log('Echo bot server running at port 4500.');
