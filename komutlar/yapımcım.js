const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
        .setDescription('')
        .setColor(0x00ffff)
        .addField("**》 > Yapımcım > 《**", `<KEYTR-Swahili#3683>`)
        .addField("**》 > Sponsor/Destek > 《**", `<んﾉﾑﾒﾘ>`)
        .addField("**》 > Grafik/Destek  >:art:《**", `<Crystal`)
        .setURL('https://www.instagram.com/bilal.erol022')
        .setTitle("İnstagram Ulaşmak İçin!")


    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yapımcım'],
    permLevel: 0
};

exports.help = {
    name: 'yapımcım',
    description: 'Botun Yapımcısını Gösterir',
    usage: 'yapımcım'
};