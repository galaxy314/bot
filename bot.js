const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd').then(console.log).catch(console.error);
    console.log('I am ready!');
});

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.get(mention);
	}
}

client.on('message', message => {
    if (message.author.bot) return;
    const messageID = message.author.id;
    const command = message.content.toLowerCase();
    
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
            message.channel.send(`${bruh}`);
    }else if(command === 'jah hard?'){
       const answers = [
          "Soft",
          "Hard",
          "Bish idk"
       ];
       let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
       message.reply(randomAnswer);
    }else if (command === 'jah avatar') {
	    if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
		}
		return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL}`);
	}
	return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL}`);
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
