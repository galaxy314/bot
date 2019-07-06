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
    
    messageID = message.author.id;
    if(command === 'id'){
        message.reply(messageID);
    }
    userGuild = message.author.guild;
    if(command === 'guild'){
       message.reply(userGuild);
    }
    
    if(messageID === '186874605443612672' && command === 'creator'){
        message.reply('Dad?');
    }else if(messageID !== '186874605443612672' && command === 'creator'){
        message.reply('You are not my creator');
    }
    
    if(messageID === '452904501163196426' && command === 'inspire'){
           message.reply('Mom?');
    }else if(messageID !== '452904501163196426' && command === 'inspire'){
           message.reply('You are not my inspiration'); 
    }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
