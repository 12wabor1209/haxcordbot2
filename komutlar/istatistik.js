const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message) => {
  let duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const botMsg = await message.reply('Hesaplıyorum. Bu işlem biraz uzun sürebilir...⚠');
  const embed = new Discord.RichEmbed()
    .setTitle("İstatistiklerim")
    .addBlankField()
    .setColor("RANDOM")
    .addField("• Bellek Kullanımım:", `[${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("• Çalışma Sürem:", `[${duration}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("• Koruduğum", `[• Kullanıcılar: ${client.users.size},\n• Sunucular: ${client.guilds.size},\n• Kanallar: ${client.channels.size}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("• Ana Pingim:", `[${Math.floor(client.ping)}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("• Mesaj Pingim:", `[${botMsg.createdTimestamp - message.createdTimestamp}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .addField("• Discord.JS Sürümüm:", `[v${Discord.version}](https://discordapp.com/oauth2/authorize?client_id=486140168839888907&scope=bot&permissions=8)`, true)
    .setFooter("Güvenlik Bot")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  botMsg.edit(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'stats', 'stat'],
  permLevel: 0
};

module.exports.help = {
  name: 'istatistik',
  description: 'Botun İstatistiklerini Gösterir',
  usage: 'istatistik'
};