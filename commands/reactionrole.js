module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client){
        const channel = '801153024595722270';
        const csgoRole = message.guild.roles.cache.find(role => role.name === "CSGO");
        const rocketleagueRole = message.guild.roles.cache.find(role => role.name === "Rocket League");
        const fortniteRole = message.guild.roles.cache.find(role => role.name === "Fortnite");
        const LoLRole = message.guild.roles.cache.find(role => role.name === "League of Legends");

        const csgoEmoji = '🔫';
        const rlEmoji = '⚽';
        const fortniteEmoji = '🏆';
        const lolEmoji = '😀';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Pick the games you play!')
        .setDescription('You will get the role for that game so you can see who plays what game!\n\n\n\n'
        + `${csgoEmoji} for the game csgo\n`
        + `${rlEmoji} for the game rocket league\n`
        + `${fortniteEmoji} for the game Fortnite\n`
        + `${lolEmoji} for the game League of Legends`);
        
        let MessageEmbed = await message.channel.send(embed);
        MessageEmbed.react(csgoEmoji);
        MessageEmbed.react(rlEmoji);
        MessageEmbed.react(fortniteEmoji);
        MessageEmbed.react(lolEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name == csgoEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(csgoRole);
                }
                if(reaction.emoji.name == rlEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rocketleagueRole);
                }
                if(reaction.emoji.name == fortniteEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fortniteRole);
                }
                if(reaction.emoji.name == lolEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(LoLRole);
                }
            } else {
                return;
            }
        });
            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
    
                if (reaction.message.channel.id == channel){
                    if(reaction.emoji.name == csgoEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(csgoRole);
                    }
                    if(reaction.emoji.name == rlEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rocketleagueRole);
                    }
                    if(reaction.emoji.name == fortniteEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(fortniteRole);
                    }
                    if(reaction.emoji.name == lolEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(LoLRole);
                    }
                } else {
                    return;
                }
        });
    }


}
