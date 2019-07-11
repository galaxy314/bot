const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    const messageID = message.author.id;
    const command = message.content.toLowerCase();
    const bruh = client.emojis.get("598933091188473867");
    
    if(messageID === '465586014430429206' && command === 'jah'){
            message.reply('JASON DERULO');
    }else if(messageID !== '465586014430429206' && command === 'jah'){
    	    message.reply('yeet');
    }else if(command === 'jah yeet'){
            message.reply('JAH YOTE');
    }else if(command === 'jah chicken'){
            message.reply('jah chicken butt');
    }else if(command === 'jah bruh'){
            const bruh = client.emojis.find(emoji => emoji.name === "Bruh_moment");
            message.reply(`${bruh}`);
    }

    if(command === 'jah id'){
        message.reply(messageID);
    }
    let userGuild = message.author.guild;
    if(command === 'jah guild'){
       message.reply(userGuild);
    }
    
    if(messageID === '186874605443612672' && command === 'jah creator'){
        message.reply('Dad?');
    }else if(messageID !== '186874605443612672' && command === ' jah creator'){
        message.reply('You are not my creator');
    }
    
    if(messageID === '452904501163196426' && command === 'jah inspire'){
           message.reply('Mom?');
    }else if(messageID !== '452904501163196426' && command === 'jah inspire'){
           message.reply('You are not my inspiration'); 
    }
    if(command === 'jah help'){
            message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "This is an embed",
            url: "http://google.com",
            description: "This is a test embed to showcase what they look like and what they can do.",
            fields: [{
                name: "Commands",
                value: "each command starts with the prefix jah(capitilization doesn't matter)/nThe basic commands are.../njah, which makes the bot yeet/njah yeet, which makes the bot yote/njah bruh, the bots bruhment/njah id and jah guild, id of the user, the guild the user is in"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© JAH Yeet"
            }
          }
        });
   }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
