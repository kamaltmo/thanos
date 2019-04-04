const Discord = require('discord.js');
const { isUserAlive } = require('./isUserAlive');
const { selectMessage } = require('./messages');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  const { author, content, mentions } = msg;
  if (content.startsWith('?survived')) {
    if (mentions.users.size) {
      const [firstMention] = mentions.users.values();
      userAlive = isUserAlive(firstMention);
      msg.reply(selectMessage(userAlive, firstMention));
    } else {
      userAlive = isUserAlive(author);
      msg.reply(selectMessage(userAlive));
    }
  }
});

client.login(process.env.TOKEN);