require("dotenv").config();

const telegraf = require("telegraf");

const bot = new telegraf(process.env.BOT_TOKEN);

// const session = require('telegraf/session')
// const Stage = require('telegraf/stage')
// const Scene = require('telegraf/scenes/base')
// const { leave } = Stage

// // Greeter scene
// const greeter = new Scene('greeter')
// greeter.enter((ctx) => ctx.reply('Hi'))
// greeter.leave((ctx) => ctx.reply('Bye'))
// greeter.hears(/hi/gi, leave())
// greeter.on('message', (ctx) => ctx.reply('Send `hi`'))

// // Create scene manager
// const stage = new Stage()
// stage.command('cancel', leave())

// // Scene registration
// stage.register(greeter)


// bot.use(session())
// bot.use(stage.middleware())
// bot.command('greeter', (ctx) => ctx.scene.enter('greeter'))
// bot.startPolling()

// bot.on('message', (ctx) => {
//   ctx.scene.state                                    // Current scene state (persistent)
//   ctx.scene.enter(sceneId, [defaultState, silent])   // Enter scene
//   ctx.scene.reenter()                                // Reenter current scene
//   ctx.scene.leave()                                  // Leave scene
// })

bot.command("test", ctx => ctx.reply("Testing..."));


bot.launch();



// bot.command("test", (ctx) => {
//   console.log(ctx.message);
//   ctx.reply("Testing...");
// });

// bot.start((ctx) => {
//   // ctx.from
//   // ctx.chat
//   // ctx.message
//   // ctx.updatedSubTypes
//   //   ctx.reply("Bienvenido");
//   ctx.reply(`Bienvenido ${ctx.from.first_name} ${ctx.from.last_name}`);

//   bot.settings((ctx) => {
//     ctx.reply("Config");
//   });

//   bot.help((ctx) => {
//     ctx.reply("Ayuda!");
//   });

//   bot.command(["Isco", "isco"], (ctx) => {
//     ctx.reply("@Frankenriqueorte es senda jeva pana. 😂😂");
//   });
//   bot.command(["Ping", "ping", "PING", "ping!"], (ctx) => {
//     ctx.reply("Pong!");
//   });

//   bot.hears(["Marico", "marico"], (ctx) => {
//     ctx.reply("Tu padre!");
//   });
//   bot.hears(["Gracias", "gracias"], (ctx) => {
//     ctx.reply("De nada. 😘😘😘");
//   });

//   bot.on("text", (ctx) => {
//     ctx.reply("Estas copiando...");
//   });

//   bot.on("sticker", (ctx) => {
//     ctx.reply("Yeah! Nice sticker.");
//   });
// });



// bot.launch();
