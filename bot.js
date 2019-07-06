const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    
    let command = message.content.toLowerCase()
    if (command === 'jah') {
    	message.reply('yeet');
  	}
    
    let args = message.content.split(" ").slice(1);
    if (command === "changeNick") {
    client.user.setUsername(args).then(user => message.reply(`My new nickname is ${user.username}!`)).catch(console.error);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
