const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    if (message.author.bot) return;
    
    let command = message.content.toLowerCase()
    if (command === 'jah') {
    	message.reply('yeet');
    }
    
    const userID = "186874605443612672"
    
    if(!message.sender === userID){
        if(message.content === 'psst'){
            message.channel.send('YEET');
        }
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
