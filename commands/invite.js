const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("**__Voici le lien d'invitation du bot__**")
            .setDescription("")
            .setColor('RANDOM')
            .setFooter("Si vous avez un quelconque problème avec le lien, veuillez faire la commande *support")
            .setTimestamp())
    },
    name: 'help'
}
