
const Discord = require('discord.js'),
    replies = ['Pierre', 'Feuille', 'Ciseaux']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(Pierre feuille ciseaux)
            .setColor('RANDOM')
            .setDescription('je choisi' replies[Math.floor(Math.random() * replies.length)]))
    },
    name: 'chifumi'
}
