const ytdl = require('ytdl-core');


module.exports = {
    name: '.зайди',
    async execute(message, args) { 
        if (message.member.voice.channel) {
            //music stuff
            message.channel.send("Зашел хуле блять");
            musicQueue.clear();

            const connection = await message.member.voice.channel.join();
            musicDispatcher = connection.play('../sounds/joined.mp3', {volume : 0.5});
            musicDispatcher.on('finish', async () => {
                if (!musicQueue.isEmpty()) {
                    let toPlay = musicQueue.poll();
                    console.log('toPlay\n', toPlay);
                    connection.play(ytdl(toPlay,  { quality: 'highestaudio', volume: 0.4}));
                } else {
                    message.channel.send("Уебанчики, музло кончилось");
                    musicDispatcher.destroy();
                    musicDispatcher = null;
                }
            });
        } else {
            message.reply('You need to join a voice channel first!');
        }
    },
};
