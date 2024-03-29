const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACION"] });
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.token);


