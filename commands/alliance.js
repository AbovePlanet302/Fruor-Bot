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

    let rreason = args.join(" ").slice(0);

    if(!rreason) return errors.noReason(message.channel);



    let reportEmbed = new Discord.RichEmbed()

    .setTitle("NEW ALLIANCE")

    .setColor("#d604cf")

    .setDescription("Hello! The Public Relations Department is pleased to announce that Fruor has gained a new ally! We are extreamly excited to be allied and can't wait to see what the future holds for our groups! Fell free to join their discord server and their game to show them your support, and if you see anyone from their community, make sure to say Hello!")
    .addField("**Group Link:**", rreason)



    let reportschannel = message.guild.channels.find(`name`, "ally-announcements");

    if(!reportschannel) return message.channel.send("Couldn't find ally channel.");

    reportschannel.send(reportEmbed);



}



module.exports.help = {

  name: "allie"

}