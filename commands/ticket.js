const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // ID van de categorie van de tickets.
    const categoryId = "635685264747921409";
 
    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;
 
    // Als ticket al gemaakt is
    var bool = false;
 
    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {
 
        // Als ticket is gemaakt, zend bericht.
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("You have already created a ticket.");
 
            bool = true;
 
        }
 
    });
 
    // Als ticket return code.
    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hello, " + message.author.username)
        .setFooter("Ticket Created!");
 
    message.channel.send(embedCreateTicket);
 
    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal
 
        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.
 
            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Ticket claimed by" + message.author.username.toString());
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
 
}
 
module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}