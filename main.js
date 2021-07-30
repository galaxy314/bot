const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'Spoon', type: 2}, status: 'dnd'}).then(console.log).catch(console.error);
    client.user.setStatus('dnd').then(console.log).catch(console.error);
    console.log('I am ready!');
});

client.on('message', message => {
  //CONSTANTS
  //command var; all commands in lowercase
  const command = message.content.toLowerCase();
  const prefix = 'spoon'
  if(command == prefix + ' create-web'){
    message.channel.createWebhook('spoon', {
      avatar:'shorturl.at/lvJL4',
      reason:'testing'
    }).then(console.log).catch(console.error)
  }
     
});

client.login(process.env.BOT_TOKEN);
