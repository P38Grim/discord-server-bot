const client = require('../../index');
const colors = require('colors');
const { ActivityType } = require('discord.js');
// made by zaydocs.dev for timmy
module.exports = {
    name: "ready"
};
// made by zaydocs.dev for timmy
client.once('ready', async () => {
    const users = client.users.cache.size
// made by zaydocs.dev for timmy
    console.log(`[READY] ${client.user.tag} is up and ready to go.`.bold)
    console.log("----------------------------------------".white);
// made by zaydocs.dev for timmy
    setInterval(() => {
        const statuses = [`${users} Users`];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: ActivityType.Watching });
    }, 60000);
})
// made by zaydocs.dev for timmy
