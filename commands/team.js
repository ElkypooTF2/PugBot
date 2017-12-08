module.exports.run = (bot, msg, args, config, c_info) => {
    if(msg.guild.member(msg.member.id).hasPermission("ADMINISTRATOR") && msg.mentions.members.size > 0) {
        var extMem = msg.mentions.members.first();
        if(args[0] == "red") {
            extMem.setVoiceChannel(config.voiceRED);
            console.log(`Set ${extMem.user.username}\'s voicechannel to RED.`);
        }
        else if(args[0] == "blu") {
            extMem.setVoiceChannel(config.voiceBLU);
            console.log(`Set ${extMem.user.username}\'s voicechannel to BLU.`);
        }
        else {
            msg.channel.send(`You must specify a team.`);
        }
    }
    else {
        msg.channel.send("You do not have sufficient permissions to preform this action.");
    }
};