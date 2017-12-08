//capme.js
module.exports.run = (bot, msg, args, config, c_info) => {
    if(msg.guild.member(msg.member.id).roles.has(config.roleCAPTAIN) && c_info.status) {
        if(args[0] == "blu" && c_info.captain.blu == "" && msg.member.id != c_info.captain.red) {
            c_info.captain.blu = msg.member.id;
            msg.guild.member(msg.member.id).addRole(config.roleBLUCAPT);
        }
        else if(args[0] == "red" && c_info.captain.red == "" && msg.member.id != c_info.captain.blu) {
            c_info.captain.red = msg.member.id;
            msg.guild.member(msg.member.id).addRole(config.roleREDCAPT);
        }
        else {
            msg.channel.send("You must specify a team.");
        }
    }
    else {
        msg.channel.send("You do not have sufficient permissions to preform this action.");
    }
};