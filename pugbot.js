const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

var c_info = {
    "status": false,
    "turn": "blu",
    "pick": 2,
    "captain": {
        "blu": "",
        "red": ""
    }
};

fs.readdir("./commands", (err, files) => {
    if(err)
        console.error(err);
    let valid = files.filter(f => f.split(".").pop() === "js");
    if(valid.length <= 0) {
        console.log("No commands to load!");
        return;
    }
    console.log(`Loading ${valid.length} command(s)...`);
    valid.forEach((f, i) => {
        let prop = require(`./commands/${f}`);
        console.log(`\t${i+1}: ${f} loaded.`);
        bot.commands.set(f.split(".").shift(), prop);
    });
});

bot.on("ready", () => {
    console.log("Locked and loaded!");
});

bot.on("message", msg => {
    if(msg.author.id == bot.user.id || !msg.content.startsWith(config.prefix)) return;
    let args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let cmd = bot.commands.get(command.replace(config.prefix, ""));
    if(cmd) {
        cmd.run(bot, msg, args, config, c_info);
        console.log(`Ran \'${command}\' successfully`);
    }
    else {
        msg.channel.send(`\`${config.prefix}${command}\` is not a valid command.`);
    }
});

bot.login(config.token);