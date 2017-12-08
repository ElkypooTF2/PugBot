module.exports.run = (bot, msg, args, config, c_info) => {
    msg.guild.member(msg.member.id).addRole(config.rolePUGGER);
	 msg.channel.send("**Congrats!** You're now eligible for PUGs!");
    console.log(`Added ${msg.member.user.username} to the pugger role.`);
};