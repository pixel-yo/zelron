const discord = require('discord.js')
module.exports = {
	name: "shifumi",
	description: "Jouer au shifumi",
	run: async message => {
		const embed = new discord.MessageEmbed()
		.setTitle("__**SHIFUMI**__")
		.setDescription("Réagissez pour jouer !")
		.setTimestamp()
		const msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("__**Résultat**__")
        		.addField("**Toi choix**", `${reaction.emoji.name}`)
        		.addField("**Mon choix**", `${me}`)
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("Dommage, Tu as perdu !");
            } else if (me === reaction.emoji.name) {
                return message.reply("Waouh, c'est une égalité!");
            } else {
                return message.reply("Bravo, vous avez gagné!");
            }
        })
        .catch(collected => {
                message.reply('Le processus a été interrompu parce que tu n\'as pas répondu dans les temps');
            })
}
}