//CREATED BY  KEYTRR

const Discord = require('discord.js');


module.exports.run = async (Octopus, message, args) => {
  if (args == 0) return message.channel.send("Anket Açabilmem İçin Bir Soru Sormalısınız.")

  let embed = new Discord.RichEmbed()
  .setTitle(`Anket: ${args}`.split(',').join(' '))
  .setColor("#ffff00")
  .setDescription(`Anketi Başlatan ${message.author.username}`);

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
       message.react("✅")
       message.react("⛔")
     }).catch(function() {
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'anket'
};