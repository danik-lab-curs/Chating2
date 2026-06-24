require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
const webAppUrl = process.env.WEBAPP_URL;

bot.start((ctx) => {
  return ctx.reply(
    "Открой Mini App:",
    Markup.keyboard([Markup.button.webApp("Открыть приложение", webAppUrl)]).resize()
  );
});

bot.launch();
console.log("Bot is running...");