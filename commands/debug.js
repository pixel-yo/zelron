const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('__**Marre d\'attendre ?**__')
            .setDescription("Tu veux que tout aille toujours très vite et que tu sois en avance sur les autres ?\n **Vient dans la version debug** [ici](https://discord.com/api/oauth2/authorize?client_id=871503878271664178&redirect_uri=https%3A%2F%2Fdiscord.gg%2FUxcQtsvXrR&response_type=code&scope=email%20identify)")
            .setColor('RANDOM')
            .setAuthor('__La version Debug__')
            .setFooter('Zelron')
            .setTimestamp())
    },
    name: 'debug'
}