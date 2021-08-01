const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        const auteur = message.author
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**Bienvenue 🎉**')
            .setDescription("Bienvenue à toi cher nouveau membre, on espère que tu va passer du bon temps sur le serveur ^^ ||n'hésite pas à faire *help pour voir mes commandes||")
            .setColor('RANDOM')
            .setAuthor(`De : ${auteur}`)
            .setFooter(`Bievenue de la part de ${auteur}`)
            .setTimestamp())
    },
    name: 'slt'
}