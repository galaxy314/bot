const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'jah help', type: 2}, status: 'dnd'}).then(console.log).catch(console.error);
    //client.user.setStatus('dnd').then(console.log).catch(console.error);
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.id === '581782568983199746');
    
    if(!channel) return;
    
    channel.send('welcome ' + '${member}' + ' please introduce yourself at #👋introductions and set roles in #📝roles');
});

client.on('message', message => {
    if (message.author.bot) return;
    
    const messageID = message.author.id;
    const command = message.content.toLowerCase();
    
    if(messageID === '465586014430429206' && command === 'jah'){
            message.reply('JASON DERULO');
    }else if(messageID !== '465586014430429206' && command === 'jah'){
    	    message.reply('yeet');
    }else if(command === 'jah yeet'){
       let answers = [
          "JAH YOTE",
          "Skeet",
          "Yeet Myself off a bridge"
       ];
       let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
       message.reply(randomAnswer);
    }else if(command === 'jah chicken'){
            message.reply('jah chicken butt');
    }else if(command === 'jah bruh'){
            message.delete();
            const bruh = client.emojis.find(emoji => emoji.name === "Bruh_moment");
            message.channel.send(`${bruh}`);
    }else if(command === 'jah hard'){
        if(message.author.id == '186874605443612672'){
            message.reply('Hard');   
        }else{
           let answers = [
              "Soft",
              "Hard",
              "Bish idk"
           ];
           let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
           message.channel.send(message.author + ' is ' + randomAnswer);
       }
    }else if(command === 'jah dead'){
       let answers = [
          "NO",
          "IDK",
          "Most likely not",
          "Hey, at least you're not a bot forced to reply to commands 24/7" 
       ];
       let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
       message.reply(randomAnswer);          
    }else if(command === 'jah nudes'){
       let answers = [
         "Yes, please",
         "You first",
         "ew no",
         "nah"
       ];
       let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
       message.reply(randomAnswer);
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
            fields: [
                {
                name: "Commands",
                value: "each command starts with the prefix jah(capitilization doesn't matter)"
                },
                {
                name: "jah",
                value: "it makes the bot yeet"
                },
                {
                name: "yeet",
                value: "the bot will yote"
                },
                {
                name: "bruh",
                value: "the bot will have a bruh moment"
                },
                {
                name: "id",
                value: "shows id of message author"
                },
                {
                name: "guild",
                value: "shows the guild of the message author"
                },
                {
                name: "dead",
                value: "Tells you if you're dead or not"
                },
                {
                name: "chicken",
                value: "hey guess what? wanna find out type -jah chicken"
                },
                {
                name: "nudes",
                value: "Tells you if you or someone should send"
                },
                {
                name: "hard",
                value: "tells you if you're hard or not"
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
