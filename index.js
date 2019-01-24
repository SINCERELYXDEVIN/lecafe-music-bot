const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "lcm'"
    })
const discord = require('discord.js');

bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = [];

bot.on('ready',function(){
    console.log("Ready");
    bot.user.setActivity("lcm'help | lcm'play", {type: 'STREAMING'})
})

client.login(process.env.BOT_TOKEN);
