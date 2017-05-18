# Flavor Text Bot
[![Discord](https://discordapp.com/api/guilds/291320513802928128/widget.png)](https://discord.gg/HhcK9hj)

A simple Discord bot that pulls a random piece of flavortext from Destiny

Add it to your server with this link: https://discordapp.com/oauth2/authorize?client_id=314674960545087489&scope=bot&permissions=268463104

# Installation
The bot uses the discord.js nodejs module, so nodejs and npm is required to install and run the bot. We recommend running the bot on Ubuntu, as such the steps below are for Ubuntu, but it should be fairly easy to adapt these to another os like windows or another flavor of linux.

First of all you should install nodejs, on most ubuntu installations this can be done with the following command(You may need to put a sudo in front of this command to work) `apt-get install nodejs`. NOTE: Make sure to install nodejs 6 or higher if you don't the bot won't work or even install properly.
You may also need to install npm which can be done with this command: `apt-get install npm`

Once everything has been installed run the following command to clone the bot onto your server: `git clone https://github.com/antioxidants/flavortextbot` (Make sure you have installed git).
From there cd into the musicbot directory like this: `cd flavortextbot`. Now use the command: `npm install` to get all the dependencies downloaded and installed, you may also need to run this command afterward: `npm install request --save`

Then you need to rename the example auth.json file and then edit it with your bot token. Begin by using this command: `mv auth.example.json auth.json`, from there use this command: `nano auth.json`, this will open the auth.json file in the nano text editor, navigate down to the bot token and inside the parantesis remove the text and then add your bot token. 

# Running the bot
To run the bot after installing the bot, run the following command: `nodejs main.js`, at this point the bot should start and you can invite it to your server using your bot users client-id and a permission url(check below). 
You will however quickly notice that if you close your ssh session(if you are using ssh) the bot will stop running, to solve this you can use a screen like this: 
make a new screen with this command, we'll call it flavorbot: `screen -S flavorbot`
this should clear you console window, now you just run the `nodejs main.js` command again and you're done, simply press Ctrl+A then d separately to 'detach' from the screen. If you ever want to have a look at the bot's console logs, SSH back into the machine and run `screen -r bot`.

# Invite the bot to your server
In order to invite the bot to your server you need to grab your botusers client id from the discord developer page, if you are at a loss, search for discord bot client id on google. Grab this url and replace the CLIENT_ID_HERE with your client id, and you should be able to choose what server the bot should connect to: https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_HERE&scope=bot&permissions=268463104 

# License
This bot is licensed with the MIT license, meaning you can do pretty much whatever you want with it.

# Contributing
If you would like to contribute, feel free to add new code to improve the bot in a pull request and if the code looks good and helps the usefulness of the bot i will merge it.
