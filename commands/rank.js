
const Discord = require("discord.js");

const botconfig = require("../botconfig.json");

const red = botconfig.red;

const green = botconfig.green;

const orange = botconfig.orange;

const errors = require("../utils/errors.js");



module.exports.run = async (bot, message, args) => {

    message.delete();

    if(args[0] == "help"){

      message.reply("Usage: !report <user> <reason>");

      return;

    }



    let reportEmbed = new Discord.RichEmbed()

    .setDescription("The command ``!info`` is coming soon!")

    .setColor(0xffffff)
    .setTimestamp()



    message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "info"

}