/*
  A small bot that will provide a random piece of Flavor Text on demand from the video game Destiny
*/

// Import the discord.js module
const Discord = require('discord.js');

var request = require("request");

try {
	var AuthDetails = require("./auth.json");
} catch (e){
	console.log("Please create an auth.json like auth.json.example with a bot token \n"+e.stack);
	process.exit();
}

// Create an instance of a Discord client
const client = new Discord.Client();

// Data url
var url = "https://destinyflavortext.net/data/flavortext.json"

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame('Playing DestinyFlavorText.net');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!flavortext') {
      request({
    url: url,
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 16764465,
    fields: [{
        name: 'Name:',
        value: entry.name
      },
      {
        name: 'Type:',
        value: entry.type
      },
      {
        name: 'Flavor Text:',
        value: entry.flavor
      }
    ],
    timestamp: new Date(),
    footer: {
      text: 'Via DestinyFlavorText.net',
    }
  }
});
})
  }
});

if(AuthDetails.bot_token){
	console.log("logging in with token");
	client.login(AuthDetails.bot_token);
} else {
	console.log("Unable to find bot token in auth.json, please add a bot token!");
}