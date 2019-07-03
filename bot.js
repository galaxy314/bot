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
client.login(process.env.NTk1ODUzMjA4NDA5MzQxOTUz.XRxHGg.gvBO4lX1P_931aDWzIrhH9MmmXE);//BOT_TOKEN is the Client Secret
