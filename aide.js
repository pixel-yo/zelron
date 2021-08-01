const Discord = require("discord.js")

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("💻__**Demande d'aide au support**__💻")
        .setDescription("Votre demande d'aide au support a bien été envoyée, un admin vous prendra en charge rapidement")
        .setFooter("Zelron")
        .setTimestamp()
        .setColor("RANDOM"))
    },
name: 'aide'
}