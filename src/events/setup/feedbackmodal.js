const client = require("../../index")
const server = require("../../config/server.json");
const { EmbedBuilder } = require("discord.js");
// made by zaydocs.dev for timmy
module.exports = {
    name: "feedbackmodalLoaded"
};
// made by zaydocs.dev for timmy
client.on('interactionCreate', async interaction => {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'feedbackmodal') {
        await interaction.reply({ content: 'Your feedback has been sent successfully', ephemeral: true });
    }
    const channel = interaction.guild.channels.cache.get(`${server.channel.feedback}`)
    const feedback = interaction.fields.getTextInputValue('feedback');
// made by zaydocs.dev for timmy
    const embed = new EmbedBuilder()
        .setAuthor({ name: `${interaction.user.username}'s feedback`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`**FeedBack** : ${feedback}`)
    try {
        channel.send({
            embeds: [embed]
        })
    } catch (err) {
        console.log(err)
    }
});
// made by zaydocs.dev for timmy
