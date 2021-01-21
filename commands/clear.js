module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(client, message, args){
        if(message.member.roles.cache.has('558321351249625159')){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You canno't delete more than 100 messages at once!");
        if(args[0] < 1) return message.reply("You must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
              message.channel.bulkDelete(messages);
        });
    }else {
        message.channel.send('I see you dont have the correct permissions!');
    }
}
}