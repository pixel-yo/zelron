const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**__Toutes les commandes du bot__**')
            .setDescription('⚔**__Modération__**\n\n *ban : banni le membre mentionné\n *tempban : banni temporairement le membre mentionné\n *mute : mute le membre mentionné\n *tempmute : mute temporairement le membre mentionné\n *kick : expulse le membre mentionné\n *unmute : démute la personne mentionné\n *unban : débanni la personne mentionné\n *clear + (nombre de messages): supprime le nombre de messages demandé\n')
            .setColor('RANDOM')
            .setAuthor('Commandes de Zelron')
            .setFooter('Zelron')
            .setTimestamp())
    },
    name: 'help'
}
