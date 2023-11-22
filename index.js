const {Telegraf} = require('telegraf');
const {message} = require('telegraf/filters');
const {login} = require("telegraf/typings/button");

const bot = new Telegraf('6374595649:AAFHN6VIntIf1ZSX7rF8S0BipE6-3MJ85bw');

bot.start((ctx) => ctx.reply('Welcome Olga!!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch().then(()=> console.log('Bot started'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
