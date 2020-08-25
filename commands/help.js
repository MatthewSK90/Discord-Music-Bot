const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Invite Me")
      .setDescription("List of all commands")
      .setColor("#F8AA2A")
      .setURL('https://discord.com/oauth2/authorize?client_id=741597659969617991&scope=bot&permissions=36908488')
      .setAuthor('Bluetooth Speaker', 'https://images.discordapp.net/avatars/741597659969617991/0130072737b99aa90203ea5b48b398f4.png?size=512', 'https://discord.com/oauth2/authorize?client_id=741597659969617991&scope=bot&permissions=36908488');

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
