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
client.login(process.env.7JD51h8C5ZZM83L2HNr1e_cXX_IyiXK0);//BOT_TOKEN is the Client Secret
