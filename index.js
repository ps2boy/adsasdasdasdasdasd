const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "_"

bot.on('ready', function(message){
    console.log('Time to dance')
});

bot.on('message', function(message){
    if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ")
    switch(args[0]){
        case "ping" :
            message.channel.sendMessage("pong")
        break;
        case 'buy':
                message.reply('To buy $100 please contact ps2boy#8202');
        break;
        case 'info':
            var embed = new Discord.RichEmbed()
            .addField("Information about this cheat", "Down Below", false)
            .addField("Owner", "The Owners of the cheat are ps2boy and core", true)
            .addField("Pricing",`
               CSGO Cheat
            10$ for 1 Month
            15$ for 2 Months
            1500$ for Lifetime

            CSGO Hour Booster
            15$ for 1 Month of constant runtime
            `, true)
            .setThumbnail(message.author.avatarURL)
            .setColor(0x20b2aa)
                message.channel.sendEmbed(embed);
        break;
        case 'help':
                message.reply(`
                Help Commands <3
_Buy : This is used for information on how to buy
_Information : give you all the information you need
_help : give you all the commands you have`);
        break;
    }
});

bot.login('NDgzMzA4MDQ2MTAyMjk4NjQ0.DmRn3A.eqtsBvCtZyOMhJqsS3WfzQ-acls');

