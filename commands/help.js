const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**__Toutes les commandes du bot__**')
            .setDescription('⚔**__Modération__**\n\n *ban : banni le membre mentionné\n')
            .setColor('RANDOM')
            .setAuthor('Commandes de Zelron')
            .setFooter('Zelron')
            .setTimestamp())
    },
    name: 'help'
}
