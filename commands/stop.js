module.exports.run = (bot, msg, args, config, c_info) => {
    if(msg.guild.member(msg.member.id).hasPermission("ADMINISTRATOR") && c_info.status) {
        c_info.status = false;
        c_info.pick = 2;
        msg.guild.members.array().forEach(member => {
            if(member.roles.has(config.roleREDCAPT))
                member.removeRole(config.roleREDCAPT);
            if(member.roles.has(config.roleBLUCAPT))
                member.removeRole(config.roleBLUCAPT);
        });
        c_info.captain.red = "";
        c_info.captain.blu = "";
        msg.channel.send("**PUG IS OVER!**");
        msg.guild.members.array().forEach(member => {
            if(member.voiceChannel) {
                if(member.voiceChannel.id == config.voiceRED || member.voiceChannel.id == config.voiceBLU)
                    member.setVoiceChannel(config.voiceLOBBY);
            }
        });
    }
    else {
        msg.channel.send("You do not have sufficient permission to preform this action.");
    }
};