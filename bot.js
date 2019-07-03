const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.595853208409341953);//BOT_TOKEN is the Client Secret
