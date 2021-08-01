const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("**__Voici le lien d'invitation du bot__**")
            .setDescription("https://discord.com/api/oauth2/authorize?client_id=858053467728642108&permissions=8&scope=bot")
            .setColor('RANDOM')
            .setFooter("Si vous avez un quelconque problème avec le lien, veuillez faire la commande *support")
            .setTimestamp())
    },
    name: 'invite'
}
