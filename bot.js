const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'jah') {
    	message.reply('yeet');
  	}
    if (message.content === 'Jah') {
    	message.reply('yeet');
  	}
    if (message.content === 'JAH') {
    	message.reply('yeet');
  	}
});

client.on('message', message => {
  if (message.content.startsWith('ChangeName')) {
    message.author.setNickname({
      nick: message.content.replace('ChangeName ', '')
    });
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
