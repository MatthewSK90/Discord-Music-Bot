const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/BluetoothspeakerUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setDescription(i18n.__("help.embedDescription"))
      .setColor("#00b0f4")
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
