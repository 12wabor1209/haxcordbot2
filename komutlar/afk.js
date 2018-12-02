const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  
    let intiharsebep = args.join(" ");
    if(intiharsebep.length < 1) {
    return message.reply('Neden Afk Olduğunu Yazmalısın')
    } else {    
   message.delete()
  const intihar = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('AFK')
      .setDescription(`:white_check_mark: **${message.author.username}** Artık Afk Durumda **${intiharsebep}** `)
      message.channel.send(intihar);
    
    }

    
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['afkol', 'afk-ol'],
    permLevel: 0,
  };
  
  exports.help = {
    name: 'afk',
    description: 'afk',
    usage: 'afk'
  };