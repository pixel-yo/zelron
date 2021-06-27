const Discord = require('discord.js'),
    replies = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%','90%', '100%']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez mentionner 2 membres')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor('RANDOM')
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: 'love'
}
