module.exports = {
    name : '.дота',
    async execute (message, args) {
        const connection = await message.member.voice.channel.join();
        const dsp = await connection
            .play('D:/Projects/DiscordBot/discord-bot-sitepoint/дота.mp3')
            .on("finish", () => {
                message.member.voice.channel.leave();
            });
    },
};
