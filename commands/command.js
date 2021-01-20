module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/channel/UCxITHNFkluk98PqsNAN0s_A')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'Talk english'},
            {name: 'Rule 3', value: 'No self promotion'}
        )
        .setImage('https://www.woef.be/wp-content/uploads/2019/06/shutterstock_1180076233-1.jpg')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }

}