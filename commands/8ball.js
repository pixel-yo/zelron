const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment', 'Je ne sais pas', 'Probablement', 'Probablement pas', 'Certain', 'Bien-sur !']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor('RANDOM')
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: '8ball'
}
