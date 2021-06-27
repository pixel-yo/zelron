const Discord = require('discord.js'),
    replies = ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez mentionner un membre')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor('RANDOM')
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: 'note'
}
