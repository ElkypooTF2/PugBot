module.exports.run = (bot, msg, args, config, c_info) => {
    function generateLink(str) {
        var s = ""+str;
        s = s.trim().split(" ").slice(s.indexOf("connect"), s.indexOf("password")+2);
        return `steam://${s[0]}/${s[1].replace(/;/g,"")}/${s[3]}`;
    };
    if(msg.guild.member(msg.member.id).hasPermission("ADMINISTRATOR")) {
        c_info.status = true;
        msg.channel.send("@here **PUG STARTED!**");
		msg.channel.send(`Connect to server: ${generateLink(config.connect)} or use \`\`\`${config.connect}\`\`\``);
        msg.channel.send(`@Captain: Use the command \`${config.prefix}capme <red|blu>\` to become this game's captain.`);
    }
    else {
        msg.channel.send("You do not have sufficient permission to preform this action.");
    }
};