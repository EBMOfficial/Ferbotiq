module.exports = {
    name: "kick",
    aliases: ["kick", "k"],
    description: "Kicks a member",

    execute(message, args, bot) {
                const Discord = require('discord.js');
        
                let person = message.guild.member(message.mentions.users.first());
                if (!person) return message.channel.send('You did not provide a GuildMember!');
                //first we are going to change this to person.kickable
                if (!person.kickable) return message.channel.send('I cannot kick this person.');
                if (person.id === message.author.id) return message.channel.send('You cannot kick yourself!');
                let reason = 'No reason specified';
                if (args[2]) reason = args.splice(2).join(" ");
                
                if (!person.user.bot) {
                    person.send(`You have been kicked from this server for ${reason}.`);
                }
                
                person.kick({
                    reason: reason
                });

                const embed = new Discord.MessageEmbed()
                    .setTitle('`Kick:`')
                    .setDescription(`\`Reason:\` \`${reason}\``)
                    .setAuthor(message.member.displayName)
                    .setColor('YELLOW')
                    .setThumbnail(person.user.avatarURL())
                    .addFields({
                        name: 'Member',
                        value: person.toString(),
                        inline: true
                    }, {
                        name: 'Member ID',
                        value: person.id,
                        inline: true
                    })
                    .setTimestamp();
        
                bot.channels.cache.get('725500766038655087').send(embed);

                //yeah basically all we needed to do was change some words in there
                //whoops I accidentally copied the whole thing lol.
                //so lets test these out!
    }
}