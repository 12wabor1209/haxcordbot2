const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("L-Güvenlik :video_game:Oyuncu Komutları!**")
        .setDescription('')
        .setColor("RANDOM")
        .addField("**» :video_game: Oyuncu Komutları**", 'g!oylama =  Oylama Yapar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!istatistik = Botun İstatistiğini Görebilirsin! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!çekiliş =  Çekiliş Yapmanızı sağlar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!gif =  Rastgele Gif Atarsınız! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!atasözü =  Rastgele Atasözü Atar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!botbilgi =  Bot ile ilgili bilgi verir! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!afk =  Afk Olmanızı sağlar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!hava =  Bölgenizdeki Havadurumunu gösterir! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!davet =  Botu sunucunuza davet edersiniz! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!yapımcım =  Botun Yapımcılarını gösterir! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!bangif=  Ban gifi yollar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!dönenrenkler =  Rasgele Dönenrenkleri atar')
        .addField("**» :video_game: Oyuncu Komutları**", 'g!anket =  Anket Yapmanızı Sağlar!')
    
    
        .setFooter("**» 👥 LG BOTU © 2018 - Tüm Hakları Saklıdır. KEYTR-SAYGILAR!**",)
       
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım2',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};