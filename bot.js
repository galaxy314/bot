const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setPresence({ game: { name: 'jah help', type: 2}, status: 'dnd'}).then(console.log).catch(console.error);
    client.user.setStatus('dnd').then(console.log).catch(console.error);
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.id === '581782568983199746');
    
    if(!channel) return;
    
    channel.send(`welcome, ${member}, please introduce yourself AND GET SOME FUCKING ROLES LIKE GODDAMN!`);
});

client.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.find(channel => channel.id === '581782568983199746');
    
    if(!channel) return;
    
    channel.send(`Yo Fuck YOU ${member}`);
});

client.on('message', message => {
    if (message.author.bot) return;
     
    //confession bot thing
    if(message.channel.type == "dm"){
        if(message.content.startsWith('jah say')){
            let str = message.content.substr(8);
            client.channels.get('581915194066993152').send(str).then(console.log).catch(console.error);
            message.reply('your message has been sent');
        }
        if(message.content.startsWith('jah mail')){
            let str = message.content.substr(9); 
            let mailauth = message.author;
            let mailID = message.author.id;
            let mailRecieveID = '186874605443612672';
            client.users.cache.get(mailRecieveID).send(mailauth+": "+mailID+"- "+str).then(console.log).catch(console.error);
        }
    }
    
    if(message.channel.type == "dm") return;
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
    
//     let myRole = message.guild.roles.get('599598959446458371');
//     let member = message.member;
//     if(message.author.id == '186874605443612672'){
//        member.addRole(myRole).catch(console.error);
//      }
    
    let prefix = 'jah reverse';
    if(message.content.startsWith(prefix)){
        let text = message.content.substr(12);
        message.delete();
        message.channel.send(text.split("").reverse().join(""));
    }
    
    if(command == 'jah day'){
        let date = new Date();
        if(date.getDay() == 0){
            message.channel.send('Sunday');
        }
        if(date.getDay() == 1){
            message.channel.send('Monday');
        }
        if(date.getDay() == 2){
            message.channel.send('Tuesday');
        }
        if(date.getDay() == 3){
            message.channel.send('Wednesday');
        }
        if(date.getDay() == 4){
            message.channel.send('Thursday');
        }
        if(date.getDay() == 5){
            message.channel.send('Friday');
        }
        if(date.getDay() == 6){
            message.channel.send('Saturday');
        }
    }
    
    //dope gaming server friday msg
    let date = new Date();
    if(command == 'jah friday' && date.getDay() == 5){
        let str = 'Friday nigga ball out';
        message.channel.send(str).then(console.log).catch(console.error);
    }else if(command == 'jah friday' && date.getDay() != 5){
        message.channel.send("bruh no").then(console.log).catch(console.error);
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
    
//     if(message.content.startsWith('jah guild')){
//             let guildMembers = client.fetchMember(message.author.id).then(console.log).catch(console.error);
//             let onlineMembers = guild.members.filter(member => member.presence.status === "online");
//             message.author.send(guildMembers);
//     }
    
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
    //prime factorization
    if(message.content.startsWith('jah factor')){
        let getNum = message.content.substr(10);
        let number = parseInt(getNum, 10);
        
        function factor(num){
            var primeFactors = [];
            while (num % 2 === 0) {
                primeFactors.push(2);
                num = num / 2;
            }
            var sqrtNum = Math.sqrt(num);
            for (var i = 3; i <= sqrtNum; i++) {
                while (num % i === 0) {
                    primeFactors.push(i);
                    num = num / i;
                }
            }
            if (num > 2) {
                primeFactors.push(num);
            }
            return primeFactors;
        }
        if(isNaN(number)){
            message.reply("please enter a whole number, jah factor (number here)");
        }else if(!isNaN(number)){
            let fac = factor(number).toString();
            message.channel.send("The prime factors of " + number + " is " + fac).then(console.log).catch(console.error);
        }
    }
    
    if(message.content.startsWith('jah prime')){
        let getNum = message.content.substr(10);
        let num = parseInt(getNum, 10);
        
        function testPrime(n){
          if (n===1){
            return false;
          }
          else if(n === 2){
            return true;
          }else{
            for(var x = 2; x < n; x++){
              if(n % x === 0){
                return false;
              }
            }
            return true;  
          }
        }
        if(testPrime(num)){
            message.channel.send(num + " is prime").catch(console.error);
        }else if(!testPrime(num)){
            message.channel.send(num + " is not prime").catch(console.error);   
        }
    }
    
    if(message.content.startsWith('jah dec2frc')){
        let getDec = message.content.substr(12);
        let dec = parseFloat(getDec,12);
        
        function HCF(u, v) { 
            var U = u, V = v;
             while (true) {
              if (!(U%=V)) return V
              if (!(V%=U)) return U 
            } 
        }
        //convert a decimal into a fraction
        function fraction(decimal){
            if(!decimal){
                decimal=this;
            }
            let whole = String(decimal).split('.')[0];
            decimal = parseFloat("."+String(decimal).split('.')[1]);
            let num = "1";
            for(let z=0; z<String(decimal).length-2; z++){
                num += "0";
            }
            decimal = decimal*num;
            num = parseInt(num);
            for(let z=2; z<decimal+1; z++){
                if(decimal%z==0 && num%z==0){
                    decimal = decimal/z;
                    num = num/z;
                    z=2;
                }
            }
            //if format of fraction is xx/xxx
            if (decimal.toString().length == 2 && 
                    num.toString().length == 3) {
                        //reduce by removing trailing 0's
                decimal = Math.round(Math.round(decimal)/10);
                num = Math.round(Math.round(num)/10);
            }
            //if format of fraction is xx/xx
            else if (decimal.toString().length == 2 && 
                    num.toString().length == 2) {
                decimal = Math.round(decimal/10);
                num = Math.round(num/10);
            }
            //get highest common factor to simplify
            var t = HCF(decimal, num);

            //return the fraction after simplifying it
            return ((whole==0)?"" : whole+" ")+decimal/t+"/"+num/t;
       }
       function isFloat(n){
             return n === +n && n !== (n|0);
       } 
       if(isFloat(dec)){ 
            message.channel.send(fraction(dec)).then(console.log).catch(console.error);
       }else if(!isFloat(dec)){
           message.reply("please use a decimal").then(console.log).catch(console.error);
       }
    }
    
    if(message.content.startsWith('jah frc2dec')){
        let num = message.content.substr(12);
        function toDeci(fraction) {
            fraction = fraction.toString();
            var result,wholeNum=0, frac, deci=0;
            if(fraction.search('/') >=0){
                if(fraction.search('-') >=0){
                    wholeNum = fraction.split('-');
                    frac = wholeNum[1];
                    wholeNum = parseInt(wholeNum,10);
                }else{
                    frac = fraction;
                }
                if(fraction.search('/') >=0){
                    frac =  frac.split('/');
                    deci = parseInt(frac[0], 10) / parseInt(frac[1], 10);
                }
                result = wholeNum+deci;
            }else{
                result = fraction
            }
            
            if(!isNaN(result)){
                return result;
            }else if(isNaN(result)){
                message.reply("please use a fraction (ie. 1-1/2 or 1/2)").catch(console.error);     
            }
        }
        message.channel.send(toDeci(num)).catch(console.error);
    }
    
    if(message.content.startsWith('jah power')){
        //jah power :2; 3 -> 2^3
        let str = message.content;
        let getNum = str.substr(str.lastIndexOf(":") + 1, str.lastIndexOf(";"));
        let num = parseInt(getNum);
        let pow = message.content.substr(str.lastIndexOf(";") + 1);
        
        function power(base, exponent) {
            var result = 1;
            if(exponent == undefined)
                exponent = 2;
            for(var i=1; i<=exponent; i++) {
                result = result * base;
            }
            if(!isNaN(result)){
                return result;
            }else if(isNaN(result)){
                message.reply("Please use an integer, jah power :number; power").catch(console.error);     
            }
        }
        message.channel.send(power(num, pow)).catch(console.error);
    }
    
    if(message.content.startsWith('jah sqroot')){
       let num = message.content.substr(11);
        
       function squareRoot(n){
            var avg=(a,b)=>(a+b)/2,c=5,b;
            for(let i=0;i<20;i++){
                b=n/c;
                c=avg(b,c);
            }
            if(!isNaN(c)){
                return c;
            }else if(isNaN(c)){
                message.reply("please use a number, jah sqroot number");   
            }
        }
        message.channel.send(squareRoot(num));
    }
    
    if(message.content.startsWith('jah nroot')){
        let str = message.content;
        let getNum = str.substr(str.lastIndexOf(":") + 1, str.lastIndexOf(";"));
        let num = parseInt(getNum);
        let root = message.content.substr(str.lastIndexOf(";") + 1);
        
        function nRoot(n, x){
            if(!isNaN(x)){
                return Math.pow(n, 1/x);
            }else if(isNaN(x)){
                message.reply("please use a number, jah nroot :number; root Number");   
            }
        }
        message.channel.send(nRoot(num, root)).catch(console.error);
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
    
    if(message.content.startsWith('jah xor')){
       let str = message.content;
       let key = str.substr(str.lastIndexOf(":") + 1, str.lastIndexOf(";")).toUpperCase();;
       let text = message.content.substr(str.lastIndexOf(";") + 1);
        
       function crypt(text, key) {
            var output = [];
            var charCode;
            for (var i = 0; i < text.length; i++) {
                charCode = text.charCodeAt(i) ^ key[i % key.length].charCodeAt(0);

            output.push(String.fromCharCode(charCode));
            }
            return output.join("");
        } 
            message.reply(crypt(text,key));
    }
    
//     //silent game
//     var channelID = '631853004286328839';
//     var SID = '631969544805679124';
//     var LID = '631969587058966548';
//     if(message.channel.id === channelID){
//        if(message.member.roles.has(SID)){
//             message.channel.send("you lost the silent game");
//           }else{
//             message.channel.send("you're a loser stfu");   
//           }
//     }
    
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
    
    if(messageID === '186874605443612672' && command === 'jah creator'){
        message.reply('Dad?');
    }else if(messageID !== '186874605443612672' && command === ' jah creator'){
        message.reply('You are not my creator');
    }
    
//     if(messageID === '452904501163196426' && command === 'jah inspire'){
//            message.reply('Mom?');
//     }else if(messageID !== '452904501163196426' && command === 'jah inspire'){
//            message.reply('You are not my inspiration'); 
//     }
    
//     if(message.author.id === '452904501163196426' && message.content.includes('.')){
//         message.react('😍')
//         .then(console.log)
//         .catch(console.error);
//     }
//     if(command.includes('fortnite')){
//        message.channel.send(`stfu fortnite's a horrible game ${message.author}, and you know it`);
//     }else if(message.author.id === '200791454950490112' && command.includes('fortnite')){
//         message.channel.send(`stfu ${message.author}, you fucking furry`);
//     }
    
//     if(command.includes('tsk')){
//        message.delete().then(console.log).catch(console.error);    
//     }
    
//         if (message.content === 'jah join') {
//         // Only try to join the sender's voice channel if they are in one themselves
//             if (message.member.voice.channel) {
//                 const connection = await message.member.voice.channel.join();
//         } else {
//           message.reply('You need to join a voice channel first!');
//         }
//       }
    
    if(message.content.startsWith('jah speak')){
        let error = console.log;
        let yeetFile = 'bot/yeet-sound-effect.mp3';
        if(message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('I have successfully connected to the channel!');
                connection.play(yeetFile);
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
                value: "each command starts with the prefix jah(all lower case) examples in between <> (don't use the <> in command)"
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
                },
                {
                name:"factor",
                value: "prime Factorization of a number <jah factor (number)>"   
                },
                {
                name:"dec2frc",
                value:"Converts a positive decimal to its fraction counterpart <jah dec2frc (decimal)>"    
                },
                {
                name:"frc2dec",
                value:"converts positive fractions to decimals <jah frc2dec (1-1/2 or 1/2 etc)> "
                },
                {
                name:"power",
                value:"exponetiates a number to the nth power <jah power :number; power>"
                },
                {
                name:"nroot",
                value:"takes the nth root of a number <jah nroot :number; root number (2, 3, 69, etc)>"
                },
                {
                name:"day",
                value:"Tells you the day of the week <jah day>"
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
