const {Telegraf, Markup} = require('telegraf')
require('dotenv').config()
const text = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`Hey, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'gay'}!`))
bot.help((ctx) => ctx.reply(text.commands))
bot.command('sm', async(ctx)=> {
    try{
        await ctx.replyWithHTML('<i>Just a punks for test</i>', Markup.inlineKeyboard( //await штука чтобы подождать выполнения фрагмента кода, для сохранения последовательности
            [
                [Markup.button.callback('Inst', 'btn_1'), Markup.button.callback('YT', 'btn_2')]//массив с кнопкой, один массив на одн ряд кнопок
            ]

        ))
    } catch (e) {
    console.error
    }
})

function addActionBot(name, src, text) {
    bot.action(name, async(ctx)=> {
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
        } catch(e) {
        console.error
        }
    })
}

addActionBot('btn_1', './img/1.jpg', text.text1)
addActionBot('btn_2', './img/2.jpg', text.text2)

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))