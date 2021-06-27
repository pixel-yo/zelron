const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**__Toutes les commandes du bot__**')
            .setDescription("⚔**__Modération__**\n\n *ban : banni le membre mentionné\n *tempban : banni temporairement le membre mentionné\n *mute : mute le membre mentionné\n *tempmute : mute temporairement le membre mentionné\n *kick : expulse le membre mentionné\n *unmute : démute la personne mentionné\n *unban : débanni la personne mentionné\n *clear + (nombre de messages): supprime le nombre de messages demandé\n *warn : met un avertissement à un membre\n *unwarn (beta) : supprime l'avertissement d'un membre\n\n **__🌐Aide__**\n\n *support : donne le lien du serveur support\n *help : affiche la liste des commandes du bot\n *invite : donne le lien d'invitation du bot\n\n **__🎈Fun__**\n\n *8ball : pose une question à la ''boule magique''\n *note : note le membre mentionné sur 10\n *love : voir le pourcentage de compatibilité entre 2 membres\n *pp : Affiche ta photo de profil")
            .setColor('RANDOM')
            .setAuthor('Commandes de Zelron')
            .setFooter('Zelron')
            .setTimestamp())
    },
    name: 'help'
}
