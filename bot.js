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
client.login(process.env.NTk1ODUzMjA4NDA5MzQxOTUz.XRxBlg.Gt99fS2aI5oHB4z0PbT_BVDBkHk);//BOT_TOKEN is the Client Secret
