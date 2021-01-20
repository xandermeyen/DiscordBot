module.exports = async (client) =>{
    const guild = client.guilds.cache.get('558321134601371648');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('797099042257109043');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 10000);
}