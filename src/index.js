// made by zaydocs.dev for timmy
require('./console/watermark')
const { Client, Partials, Collection } = require('discord.js');
const colors = require('colors');
const config = require('./config/config.json');
// made by zaydocs.dev for timmy
const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildPresences",
        "GuildMessageReactions",
        "DirectMessages",
        "MessageContent",
        "GuildVoiceStates",
        "GuildMembers",
        "DirectMessageTyping"
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
        Partials.Reaction
    ]
})
// made by zaydocs.dev for timmy
if (!config.TOKEN) {
    console.log("[WARN] Token for discord bot is required! put your token in config file".yellow.bold + "\n")
    return process.exit();
};
// made by zaydocs.dev for timmy
if (!config.OWNER) {
    console.log("[WARN] Owner ID required! put your owner id in config file".yellow.bold + "\n")
    return process.exit();
};
// made by zaydocs.dev for timmy
client.config = require('./config/config.json')
client.commands = new Collection()
client.events = new Collection()
client.aliases = new Collection()
// made by zaydocs.dev for timmy
module.exports = client;
// made by zaydocs.dev for timmy
["command", "event"].forEach(file => {
    require(`./handlers/${file}`)(client);
});
// made by zaydocs.dev for timmy
client.login(config.TOKEN)
    .catch((err) => {
        console.log("[CRUSH] Something went wrong while connecting to your bot" + "\n");
        console.log("[CRUSH] Error from DiscordAPI :" + err);
        process.exit();
    })
// made by zaydocs.dev for timmy
process.on("unhandledRejection", async (err) => {
    console.log(`[ANTI - CRUSH] Unhandled Rejection : ${err}`.red.bold)
    console.log(err)
})
// made by zaydocs.dev for timmy
