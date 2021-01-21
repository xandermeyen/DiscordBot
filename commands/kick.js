module.exports = {
    name: 'kick',
    description: "This command can kick a member!",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
                        const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You cannot kick that member');
        }
    
    }
}
