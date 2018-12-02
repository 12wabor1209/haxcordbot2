const Discord = require('discord.js');
const main = require('../ayarlar.json');

exports.run = (Octopus, message, params) => {

	if (!message.guild) {
    const Uyarı = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucuBigisi` Adlı Komutu Özel Mesajlarda Kullanamazsın.')
    return message.author.sendEmbed(Uyarı); }
    if (message.channel.type !== 'dm') {
      const Sunucu = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu IDsi:', message.guild.id)
    .addField('Ana Kanalı:', message.guild.defaultChannel)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye Sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal Sayısı:', message.guild.channels.size)
    .addField('Oluşturulma Tarihi:', message.guild.createdAt)
    return message.channel.sendEmbed(Sunucu);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi'
};