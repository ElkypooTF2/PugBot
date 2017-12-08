module.exports.run = (bot, msg, args, config, c_info) => {
    if(msg.guild.member(msg.member.id).hasPermission("ADMINISTRATOR") && msg.mentions.channels && args.length > 1) {
        args.shift();
        var m = args.join(" ");
        var c = msg.mentions.channels.first();
        c.send(m);
    }
    else {
        msg.channel.send(`\`!say\` is not a valid command.`);
    }
};