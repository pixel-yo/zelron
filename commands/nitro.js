const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**__NITRO__**)
            .setDescription('Clique ici pour avoirs nitro : [https://discord.com/gifts/vc8D5qPsVjkjQ3JZqGQH434f](https://youtu.be/dQw4w9WgXcQ)')
            .setColor('RANDOM')
            .setTimestamp()
    },
    name: 'embed'
}
