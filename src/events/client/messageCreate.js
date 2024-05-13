const client = require('../../index');
const config = require('../../config/config.json');
// made by zaydocs.dev for timmy
module.exports = {
    name: "messageCreate"
};
// made by zaydocs.dev for timmy
client.on('messageCreate', async (message) => {
    if (message.channel.type !== 0) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(config.PREFIX)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
// made by zaydocs.dev for timmy
    const args = message.content.slice(config.PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
// made by zaydocs.dev for timmy
    let command = client.commands.get(cmd);
// made by zaydocs.dev for timmy
    if (!command) command = client.commands.get(client.aliases.get(cmd))
// made by zaydocs.dev for timmy
    if (command) {
        if (command.ownerOnly) {
            if (!config.OWNER.includes(message.member.id)) {
                message.reply({
                    content: `**${message.member}** You can't access community owner commands`,
                })
                return;
            }
        }
// made by zaydocs.dev for timmy
        try {
            command.run(client, message, args);
        } catch (err) {
            console.log(err);
        }
    }
})
// made by zaydocs.dev for timmy
