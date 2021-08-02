const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("**__Support__**")
            .setDescription("Cliquez [ici](https://discord.gg/kmCJ25nPcY) pour accéder au support")
            .setColor('RANDOM')
            .setFooter("Si vous avez un quelconque problème avec le lien, veuillez faire la commande *aide")
            .setTimestamp())
    },
    name: 'support'
}
