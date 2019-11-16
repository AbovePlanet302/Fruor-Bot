const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "635685264747921409";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Please do this command in a ticket channel.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hello, " + message.channel.name)
        .setDescription("Your ticket is marked as **complete**. If you want to make a new one do !Ticket")
        .setFooter("Ticket Closed");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "support");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}