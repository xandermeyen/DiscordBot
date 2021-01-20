const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACION"] });

const prefix = '*';

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Lantjes bot is online!');
	memberCounter(client)
});


client.on('guildMemberAdd', guildMember => {
	let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');

	guildMember.roles.add(welcomeRole);
	guildMember.guild.channels.cache.get('558324754617073667').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to checkout the Rules!`)
});

client.on('message', message => {


	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'clear') {
		client.commands.get('clear').execute(message, args);
	} else if (command === 'kick') {
		client.commands.get('kick').execute(message, args);
	} else if (command === 'ban') {
		client.commands.get('ban').execute(message, args);
	} else if (command === 'mute') {
		client.commands.get('mute').execute(message, args);
	} else if (command === 'unmute') {
		client.commands.get('unmute').execute(message, args);
	} else if (command === 'download') {
		client.commands.get('download').execute(message, args);
	} else if (command === 'youtube') {
		client.commands.get('youtube').execute(message, args);
	} else if (command === 'reactionrole') {
		client.commands.get('reactionrole').execute(message, args, Discord, client);
	} else if (command === 'command'){
		client.commands.get('command').execute(message, args, Discord);
	}
})

bot.login(process.env.token);


