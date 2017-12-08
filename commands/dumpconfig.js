module.exports.run = (bot, msg, args, config, c_info) => {
    msg.member.send(`\`\`\`
                    \ntoken: ---------------
                    \nprefix: ${config.prefix}
                    \nRED voicechannel: ${config.voiceRED}
                    \nBLU voicechannel: ${config.voiceBLU}
                    \nLOBBY voicechanne: ${config.voiceLOBBY}
                    \nDEFAULT textchannel: ${config.textDEFAULT}
                    \nCOMMANDS textchannel: ${config.textCOMMANDS}
                    \nPUGGER role: ${config.rolePUGGER}
                    \nCAPTAIN role: ${config.roleCAPTAIN}
                    \nADMIN role: ${config.roleADMIN}
                    \n\`\`\``);
};