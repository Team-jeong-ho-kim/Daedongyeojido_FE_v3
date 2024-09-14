const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const MESSAGE = process.env.DISCORD_MESSAGE || '배포 상태가 업데이트되었습니다.';

client.once('ready', () => {
  console.log('Discord bot is ready!');
  const channel = client.channels.cache.get(CHANNEL_ID);
  if (channel) {
    channel.send(MESSAGE)
      .then(() => {
        console.log('Message sent successfully');
        process.exit(0);
      })
      .catch(error => {
        console.error('Error sending message:', error);
        process.exit(1);
      });
  } else {
    console.error('Discord channel not found');
    process.exit(1);
  }
});

client.login(DISCORD_TOKEN);