module.exports = {
    name: 'youtube',
    description: "sends the youtube link",
    execute(client, message, args){


        if(message.member.roles.cache.has('798992628883521586')){
            message.channel.send('https://www.youtube.com/channel/UCxITHNFkluk98PqsNAN0s_A');
        }else{
            message.channel.send('I see you dont have the correct permissions, let me change that :)');
            message.member.roles.add('798992628883521586').catch(console.error);
        }
       
    }
 
}