const Discord = require('discord.js');
const client = new Discord.Client();
const opus = require('opus')

if(!Discord.opus.is_loaded()){
    Discord.opus.load_opus('opus');   
}

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'jah help', type: 2}, status: 'dnd'}).then(console.log).catch(console.error);
    client.user.setStatus('dnd').then(console.log).catch(console.error);
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.id === '581782568983199746');
    
    if(!channel) return;
    
    channel.send(`welcome, ${member}, please introduce yourself at #👋introductions and set roles in #📝roles`);
});

client.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.find(channel => channel.id === '581782568983199746');
    
    if(!channel) return;
    
    channel.send(`later ,${member}, what a loser`);
});

client.on('message', message => {
    if (message.author.bot) return;
    
    const messageID = message.author.id;
    const user = message.mentions.members.first();
    const role = message.mentions.roles.first();
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
            message.channel.send('chicken butt ' + ' gotcha ' + message.author.toString());
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
           message.channel.send(message.author.toString() + ' is ' + randomAnswer);
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
    }
    
    if(message.content.startsWith('jah is')){
        if(user || role){
            let answers = [
             "yes",
             "no",
             "perhaps",
             "unclear",
             "possibly",
             "above my paygrade"
            ];
            let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            message.reply(randomAnswer);
        }else if(!user || !role){
            message.reply('you must mention someone after the is');   
        }
    }
    
    if(message.content.startsWith('jah userid')){
     if(user){
        let id = message.mentions.users.first().id;
        message.reply(id);   
     }else if(!user){
        let id = message.author.id;
        message.reply("your id is " + id); 
     }
    }
    
    let prefix = 'jah reverse';
    if(message.content.startsWith(prefix)){
        let text = message.content.substr(12);
        message.delete();
        message.channel.send(text.split("").reverse().join(""));
    }
    
    if(message.content.startsWith('jah send')){
       if(user){
            message.delete();
            let id = message.mentions.users.first().id;
            let msg = message.content.substr(id.toString().length + 12);
            client.users.get(id).send(msg);
       }else if(!user){
           message.delete();
            let id = message.content.substr(9, 18);
            let msg = message.content.substr(id.toString().length + 9);
            client.users.get(id).send(msg);
            //message.reply('You must mention someone after the send')   
       }
    }
    
    if(message.content.startsWith('jah txt2b64')){
        let text = message.content.substr(12);
        message.delete();
        'use strict';
        let data = text;
        let buff = new Buffer(data);
        let base64data = buff.toString('base64');
        message.reply(base64data);
    }
    
    if(message.content.startsWith('jah txt2hex')){
        let text = message.content.substr(12);
        message.delete();
        'use strict';
        let data = text;
        let buff = new Buffer(data);
        let hexdata = buff.toString('hex');
        message.channel.send(hexdata);
    }
    
    if(message.content.startsWith('jah caesar')){
        //jah caesar :13; abcd
        message.delete();
        let str = message.content;
        let getShift = str.substr(str.lastIndexOf(":") + 1, str.lastIndexOf(";"));
        let shift = parseInt(getShift,10);
        let text = message.content.substr(str.lastIndexOf(";") + 1);
        
        function caesar (text, shift) {
            return text.toUpperCase().replace(/[^A-Z]/g,'').replace(/./g, function(a) {
            return String.fromCharCode(65+(a.charCodeAt(0)-65+shift)%26);
            });
        }
        //message.reply(shift)
        if(isNaN(shift)){
            message.reply("please enter a whole number between :;");
        }else if(!isNaN(shift)){
            message.reply(caesar(text,shift));
        }
    }
    
    if(message.content.startsWith('jah rot13')){
        //let shift = message.content.substr(11, 13);
        let text = message.content.substr(10);
        message.delete();
        function rot13 (text, shift) {
            return text.toUpperCase().replace(/[^A-Z]/g,'').replace(/./g, function(a) {
            return String.fromCharCode(65+(a.charCodeAt(0)-65+shift)%26);
            });
        }
        message.reply(rot13(text,13));
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
    
    if(message.content.startsWith('jah speak')){
        let error = console.log;
        let command = message.content.substr(10);
        let yeetFile = 'http://peal.io/p/yeet';
        if(message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('I have successfully connected to the channel!');
                connection.playArbitraryInput(yeetFile);
            })
            .catch(error);
            //message.reply(error)
        }else{
            message.reply('you need to be in a voice channel for me to join');   
        }
    }
    
    if(command === 'jah stop'){
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();   
        }else{
            message.reply('I must be in a voice channel to be disconnected');   
        }
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
                value: "each command starts with the prefix jah(all lower case) examples in between <>"
                },
                {
                name: "jah",
                value: "it makes the bot yeet <jah>"
                },
                {
                name: "yeet",
                value: "the bot will yote and other stuff <jah yeet>"
                },
                {
                name: "bruh",
                value: "the bot will have a bruh moment <jah bruh>"
                },
                {
                name: "userid",
                value: "shows id of the mentioned user. if no mention it says your id <jah userid @user>"
                },
                {
                name: "guild",
                value: "shows the guild of the message author <jah guild>"
                },
                {
                name: "dead",
                value: "Tells you if you're dead or not <jah dead>"
                },
                {
                name: "chicken",
                value: "hey guess what? wanna find out type <jah chicken>"
                },
                {
                name: "hard",
                value: "tells you if you're hard or not <jah hard>"
                },
                {
                name: "is",
                value: "jah will answer a yes or no question, you must mention a user on the server after the is for the command to work <jah is (question)>"
                },
                {
                name: "reverse",
                value: "reverses the text after reverse <jah reverse (text here)>"
                },
                {
                name: "send",
                value: "sends an annonymous dm to the mentioned person or there id (userid) <jah send @User/id (text here)>"
                },
                {
                name: "txt2b64",
                value: "converts text to base64 (numbers too) <jah txt2b64 (text here)>"    
                },
                {
                name: "txt2hex",
                value: "converts text to hex (numbers too) <jah txt2hex (text here)>"    
                },
                {
                name: "rot13",
                value: "encrypts text (not numbers) through the rot13 cipher <jah rot13 (text here)>"    
                },
                {
                name: "caesar",
                value: "encrypts text (not numbers) through the caesar cipher <jah caesar :(number of shifts); (text here)>"    
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
