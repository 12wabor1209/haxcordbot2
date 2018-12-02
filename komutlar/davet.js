exports.help = {
    name: 'davet',
    description: 'Botun davet linkini gönderir.',
    usage: 'davet'
};
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Tam Buraya Tıklayıp Davet Edebilirsin | Press Invite")
        .setAuthor("", "https://images-ext-1.discordapp.net/external/h3kyyeG4Wzrzb-3FpxUumpbxUcHKOC5PcNgYR2eggLw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/498455301431754752/bd6326d931a107d9937483349024d327.png?width=566&height=566")
        .setColor("RANDOM")
        .setDescription("Hiaxy sunucunuza ekleyip sunucunuzda arkadaşlarınızla eğlenebilirsiniz.")
        .setFooter('Hiaxy', client.user.PoweradeURL)
        .setFooter('Hiaxy', client.user.PoweradeURL)
        .setTimestamp()
        .setURL('https://discordapp.com/oauth2/authorize?client_id=479260863006638080&scope=bot&permissions=805314622')

    message.channel.send({
        embed
    });
};
exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Eğlence Sunucusu")
        .setColor("RANDOM")
        .setDescription("HiaxyTv Eğlenceli Vakit Geçirebilirsiniz!.")
        .setFooter('Hiaxy', client.user.PoweradeURL)
        .setFooter('Hiaxy', client.user.PoweradeURL)
        .setTimestamp()
        .setURL('https://discord.gg/e3fQqJ')

    message.channel.send({
        embed
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
    permLevel: 0
};

exports.help = {
    name: 'davet',
    description: 'Bot ile ilgili bilgi verir.',
    usage: 'davet'
};