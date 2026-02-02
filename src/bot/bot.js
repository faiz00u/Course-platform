const TelegramBot = require("node-telegram-bot-api");
const commands = require("./commands");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// /start command
bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, "Welcome! Use /courses to see available courses.");
});

// Command handler
bot.on("message", async msg => {
  await commands.handleMessage(bot, msg);
});

module.exports = bot;
