const fs = require('fs');
const config = require('./configure.json');
const Bot = require('./src/AI');
const Client = require('./lib/Client');
const client = new Client();
const bot = new Bot();
const prefix = bot.prefix;

bot.connect();

//some variables for bot
var public = 1;


const admins = config.permissions.admins;
const bans = config.permissions.bans;
const botowner = config.permissions.bot.owner;

bot.client.on('a', async message => {
    let cmd = message.a.split(' ')[0].slice(prefix.length).trim();
    const input = message.a.indexOf(" ") === -1 ? undefined : message.a.substring(message.a.indexOf(" ")+1).trim();
    const args = message.a.split(' ');
    if (message.a.startsWith(prefix)) {
        if (public || botowner) {
            switch(cmd.toLowerCase()) {
                case "ping": ping();
            }
        }
    }
})

function ping() {
    bot.chat("Pong!");
}