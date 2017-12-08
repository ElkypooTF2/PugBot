module.exports.run = (bot, msg, args, config, c_info) => {
    if(msg.guild.member(msg.member.id).hasPermission("ADMINISTRATOR")) {
        var extMem = msg.mentions.members.first();
        if(args[0] == "add") {
            if(!msg.guild.member(extMem.id).roles.has(config.roleCAPTAIN)) {
                extMem.addRole(config.roleCAPTAIN);
                console.log(`Gave ${extMem.user.username} the captain role.`);
            }
            else {
                msg.channel.send(`${extMem.user.username} is already a captain.`);
            }
        }
        else if(args[0] == "remove") {
            if(msg.guild.member(extMem.id).roles.has(config.roleCAPTAIN)) {
                extMem.removeRole(config.roleCAPTAIN);
                console.log(`Removed the captain role from ${extMem.user.username}.`);
            }
            else {
                msg.channel.send(`${extMem.user.username} is not a captain.`);
            }
        }
        else {
            msg.channel.send(`You must specify an action.`);
        }
    }
    else {
        msg.channel.send("You do not have sufficient permissions to preform this action.");
    }
};