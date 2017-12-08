//pick.js
module.exports.run = (bot, msg, args, config, c_info) => {
    var extMem = msg.mentions.members.first();
    var extMemG = msg.guild.member(extMem);
    if(c_info.status) {
        if(extMem) {
            if(extMem.voiceChannelID == config.voiceLOBBY) {
                if(msg.member.id == c_info.captain.blu) {
                    extMemG.setVoiceChannel(config.voiceBLU);
                }
                else if(msg.member.id == c_info.captain.red) {
                    extMemG.setVoiceChannel(config.voiceRED);
                }
                else {
                    msg.channel.send("No.");
                }
            }
            else {
                msg.channel.send(`${extMem.user.username} doesn't seem to be playing in this pug...`);
            }
        }
        else {
            msg.channel.send("You must mention the member you want to pick.");
        }
    }
    else {
        msg.channel.send("There aren\'t any pugs going on.");
    }
};