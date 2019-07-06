const Discord = require('discord.js');
const client = new Discord.Client();
const userID = 186874605443612672;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    
    let command = message.content.toLowerCase()
    if (command === 'jah') {
    	message.reply('yeet');
    }
    
    let id = message.author.id;
    if(id === userID){
        if(command === 'psst'){
            message.reply('Gay');
        }
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
