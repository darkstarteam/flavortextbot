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

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame('DestinyFlavorText.net');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!flavortext') {
      request({
    url: "https://destinyflavortext.net/data/flavortext.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 54887,
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

  if (message.content === '!flavortext auto rifle') {
      request({
    url: "https://destinyflavortext.net/data/weapons/autos.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 15033353,
    fields: [{
        name: 'Name:',
        value: entry.name
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

if (message.content === '!flavortext scout rifle') {
      request({
    url: "https://destinyflavortext.net/data/weapons/scouts.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 00000000,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext sniper rifle') {
      request({
    url: "https://destinyflavortext.net/data/weapons/snipers.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 13026971,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext fusion rifle') {
      request({
    url: "https://destinyflavortext.net/data/weapons/fusions.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 6744831,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext pulse rifle') {
      request({
    url: "https://destinyflavortext.net/data/weapons/pulses.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 3963904,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext shotgun') {
      request({
    url: "https://destinyflavortext.net/data/weapons/shotguns.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 16711714,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext sidearm') {
      request({
    url: "https://destinyflavortext.net/data/weapons/sidearms.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 16777215,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext hand cannon') {
      request({
    url: "https://destinyflavortext.net/data/weapons/hand%20cannons.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 13876736,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext machine gun') {
      request({
    url: "https://destinyflavortext.net/data/weapons/lmgs.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 8257678,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext rocket launcher') {
      request({
    url: "https://destinyflavortext.net/data/weapons/rockets.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 8847378,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext sword') {
      request({
    url: "https://destinyflavortext.net/data/weapons/swords.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 532694,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext titan armor') {
      request({
    url: "https://destinyflavortext.net/data/armor/titan_armor.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 9634049,
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

  if (message.content === '!flavortext hunter armor') {
      request({
    url: "https://destinyflavortext.net/data/armor/hunter_armor.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 14187008,
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

  if (message.content === '!flavortext warlock armor') {
      request({
    url: "https://destinyflavortext.net/data/armor/warlock_armor.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 16773511,
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

  if (message.content === '!flavortext artifact') {
      request({
    url: "https://destinyflavortext.net/data/armor/artifacts.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 65467,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext ship') {
      request({
    url: "https://destinyflavortext.net/data/misc/ships.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 12323722,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext sparrow') {
      request({
    url: "https://destinyflavortext.net/data/misc/sparrows.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 4471902,
    fields: [{
        name: 'Name:',
        value: entry.name
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

  if (message.content === '!flavortext ghost') {
      request({
    url: "https://destinyflavortext.net/data/misc/ghosts.json",
    json: true
}, function (error, response, body) {

    // Randomize the JSON result from DestinyFlavorText.net
    var entry = body[Math.floor(Math.random()*body.length)]; 
    
    // Make a fancy embed message with the JSON data
    message.channel.send('', {embed: {
    color: 1360613,
    fields: [{
        name: 'Name:',
        value: entry.name
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
  
  if (message.content === '!help') {
    
    // Inform the user to check his DM for help
    message.channel.send('A DM with help has been sent to ' + message.author)
    // Send a message with commands to the user in a DM
    message.author.send('```The Destiny Flavor Text bot for Discord, is a small bot that can give you flavortext on weapons, armor and other items from Destiny. Here are the commands you can use: \n !flavortext: Will give you a random piece of flavortext from any item in the game \n !flavortext + weapon type: Will give you a random piece of flavortext from the specified weapon e.g !flavortext auto rifle will give you a random piece of flavortext from a random auto rifle. \n !flavortext artifact: will give you a random piece of flavortext from any non-class specific artifact. \n !flavortext ship: will give you a random piece of flavortext from a random ship. \n !flavortext sparrow: will give you a random piece of flavortext from a random sparrow. \n "!flavortext ghost: will give you a random piece of flavortext from a random ghost shell. \n !flavortext class + armor: will give you a random piece of armor from the specified class, e.g: !flavortext titan armor. \n !botstatus: will give you a status report on the bot itself.```')
    
  };

})

if(AuthDetails.bot_token){
	console.log("logging in with token");
	client.login(AuthDetails.bot_token);
} else {
	console.log("Unable to find bot token in auth.json, please add a bot token!");
}