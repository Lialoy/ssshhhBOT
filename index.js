const {Telegraf, Markup} = require('telegraf')
require('dotenv').config()
const text = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)
const sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:', (err)=> {
    if(err){
        return console.error(err.message)
    }
    console.log('Connected to in-memory SQlite database.')
})  // SQLite3 database connecting with error catching

bot.start((ctx) => ctx.reply(`Hey, ${ctx.message.from.first_name ? ctx.message.from.first_name : '*unknown person*'}!`)) // Welcome message with user first_name
bot.help((ctx) => ctx.reply(text.commands)) // Help command with text from const.js commands constant
bot.command('credits', async(ctx)=>{ 
    try{
        await ctx.replyWithHTML(
            '<strong> dev.by.Lialoy </strong>', Markup.inlineKeyboard([
                [Markup.button.callback('Instagram', 'btn_1'), Markup.button.callback('Telegram', 'btn_2')]
            ]
            )
        )
    }catch(e){
    console.error}
})  // Simple async command with button markup and error catching

function addActionBot(name, src, text) {
    bot.action(name, async(ctx)=>{
        try{
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text,{
                disable_web_page_preview: true
            })
        }catch(e){
            console.error
        }
    })
}   // Reply function with text/photo reply things and error catching

addActionBot('btn_1', false, text.text1)
addActionBot('btn_2', false, text.text2) // Callback data buttons

bot.launch()
console.log('by Lialoy')
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))