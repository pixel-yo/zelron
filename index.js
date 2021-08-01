const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(config.token)
client.commands = new Discord.Collection()
client.db = require('./db.json')

client.once('ready', () => {
    console.log('zelron est prêt !')
})

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('ready', () => {
    const statuses = [
        () => ``,
        () => `*help | ${client.guilds.cache.size} serveurs`,
        () => `Version : 1.1.9`,
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')
    command.run(message, args, client)
})

client.on('message', async(msg) => {
    if (msg.content.startsWith('*aide')) {
    const args = msg.content.trim().split(/ +/)
    const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
    if (!reason) return msg.channel.send('Veuillez fournir une raison')
    const cha = await client.channels.cache.find(x => x.id == "871331902974464061")
    let channel = msg.channel
    channel.createInvite({unique: true})
      .then(invite => {
      cha.send((new Discord.MessageEmbed())
      .setDescription(":information_source: [Invitation du serveur](https://discord.gg/" + invite.code + ")")
      .setColor("RANDOM")
      )
      cha.send("<@&858090226063507527> <@&858090720195117107>")
    })
      cha.send(new Discord.MessageEmbed()
            .setTitle("**__Demande d'aide__**")
            .setDescription(`__**Par**__ : ${msg.author}\n __**Raison**__ : ${reason}\n __**Serveur**__ : ${msg.guild.name} `)
            .setColor('RANDOM')
            .setThumbnail(msg.author.displayAvatarURL)
            .setFooter('Zelron aide')
            .setTimestamp())
    } 
})