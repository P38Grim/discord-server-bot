const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");
const client = require("../../index.js");
// made by zaydocs.dev for timmy
module.exports = {
    name: "feedbackLoaded"
};
// made by zaydocs.dev for timmy
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
// made by zaydocs.dev for timmy
    if (interaction.customId == 'feedback') {
        const modal = new ModalBuilder()
            .setCustomId('feedbackmodal')
            .setTitle('FeedBack Us 😀');
// made by zaydocs.dev for timmy
        const feedback = new TextInputBuilder()
            .setCustomId('feedback')
            .setLabel("FeedBack")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMinLength(5)
            .setMaxLength(1024);
// made by zaydocs.dev for timmy
        const firstActionRow = new ActionRowBuilder().addComponents(feedback);
// made by zaydocs.dev for timmy
        modal.addComponents(firstActionRow);
// made by zaydocs.dev for timmy
        await interaction.showModal(modal);
    }
})
// made by zaydocs.dev for timmy
