const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**__Reverse__**')
            .setImage("https://tenor.com/view/reverse-card-uno-uno-cards-gif-13032597")
            .setColor('RANDOM')
            .setFooter('Zelron')
            .setTimestamp())
    },
    name: 'reverse'
}
