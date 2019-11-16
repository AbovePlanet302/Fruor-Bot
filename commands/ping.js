
module.exports = {

    name: "ping",

    category: "info",

    description: "Returns latency and API ping",

    run: async (client, message, args) => {

        const msg = await message.channel.send(`🏓 Pinging....`);



        msg.edit(`🏓 Pong!
        
        ${Math.round(client.ping)}ms`);

    }

}

module.exports.help = {
    name: "ping"
  }
  