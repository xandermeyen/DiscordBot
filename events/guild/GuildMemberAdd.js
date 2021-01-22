module.exports = (Discord, client, message) =>{

        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');

        guildMember.roles.add(welcomeRole);
	guildMember.guild.channels.cache.get('558324754617073667').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to checkout the Rules!`)

}