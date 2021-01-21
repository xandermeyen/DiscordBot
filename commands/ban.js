module.exports = {
    name: 'ban',
    description: "This command can ban a member!",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('You cannot ban that member');
        }
    
    }
}
