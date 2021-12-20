const {Telegraf, Markup, Scenes, Scenes:{ BaseScene, Stage }, session} = require('telegraf')
require('dotenv').config()
const values = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)

const commonScene = new Scenes.BaseScene('commonScene')
commonScene.enter(async(ctx) => {
    try{
        await Markup.removeKeyboard(true)
        await ctx.reply('What city do you to live in?', Markup.inlineKeyboard([
            Markup.button.callback('Kyiv', 'kyiv_c'),
            Markup.button.callback('Zhytomyr', 'zhytomyr_c')
        ]))
    }catch(e){
        console.error()
    }
})

commonScene.action('kyiv_c', async(ctx) => {
    global.city = 'Kyiv';
    try{
        await ctx.editMessageText(values.k_text_h, Markup.inlineKeyboard([
            Markup.button.callback('Shevchenkivskiy district', 'sheva_d'),
            Markup.button.callback('Pecherskiy district', 'pechera_d')
        ]))
    }catch(e){
        console.error()
    }
})

commonScene.action('zhytomyr_c', async(ctx) => {
    global.city = 'Zhytomyr';
    try{
        await ctx.editMessageText(values.k_text_h, Markup.inlineKeyboard([
            Markup.button.callback('Bogunskiy district', 'bogun_d'),
            Markup.button.callback('Korolyovskiy district', 'korol_d')
        ]))
    }catch(e){
        console.error()
    }
})

commonScene.action('sheva_d', async(ctx) => {
    global.district = 'Shevchenkivskiy'
    try{
        await ctx.editMessageText('Okey Dokey😋'),
        ctx.reply(`Are you syre that you want to live in ${district ? district : 'any'} district of ${city}?`, Markup.inlineKeyboard([[
            Markup.button.callback('Yes! ', 'yes1'),
            Markup.button.callback('No', 'no')
        ]]))
    }catch(e){
        console.error()
    }
})

commonScene.action('pechera_d', async(ctx) => {
    global.district = 'Pecherskiy'
    try{
        await ctx.editMessageText('Okey Dokey😋'),
        ctx.reply(`Are you syre that you want to live in ${district ? district : 'any'} district of ${city}?`, Markup.inlineKeyboard([[
            Markup.button.callback('Yes! ', 'yes2'),
            Markup.button.callback('No', 'no')
        ]]))
    }catch(e){
        console.error()
    }
})

commonScene.action('bogun_d', async(ctx) => {
    global.district = 'Bogunskiy'
    try{
        await ctx.editMessageText('Okey Dokey😋'),
        ctx.reply(`Are you syre that you want to live in ${district ? district : 'any'} district of ${city}?`, Markup.inlineKeyboard([[
            Markup.button.callback('Yes! ', 'yes3'),
            Markup.button.callback('No', 'no')
        ]]))
    }catch(e){
        console.error()
    }
})

commonScene.action('korol_d', async(ctx) => {
    global.district = 'Korolyovskiy'
    try{
        await ctx.editMessageText('Okey Dokey😋'),
        ctx.reply(`Are you syre that you want to live in ${district ? district : 'any'} district of ${city}?`, Markup.inlineKeyboard([[
            Markup.button.callback('Yes!', 'yes4'),
            Markup.button.callback('No', 'no')
        ]]))
    }catch(e){
        console.error()
    }
})

commonScene.action('no', (ctx) =>{
    ctx.answerCbQuery()
    ctx.reply('Do you want to restart bot?🙈', Markup
    .keyboard([
        ['Yes😎', 'No🙅'],
        ['/help']
    ])
    .oneTime()
    .resize(),
    Markup.removeKeyboard()
    )
})

commonScene.action('yes1', (ctx)=>{
    ctx.answerCbQuery()
    ctx.replyWithSticker(values.sticker_medium)
    ctx.reply('Choose your budget and enjoy!', Markup.inlineKeyboard([[
        Markup.button.url('Low budget', "https://dom.ria.com/uk/search?category=1&realty_type=2&operation=3&state_id=10&city_id=10&with_newbuilds=0&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&d_id=15190%3A18201%3A18213%3A18214%3A18215%3A18216%3A18217%3A18315&ch=235_t_10000,246_244"
        ),
        Markup.button.url('Medium budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=10&city_id=10&with_newbuilds=0&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&d_id=15190%3A18201%3A18213%3A18214%3A18215%3A18216%3A18217%3A18315&ch=235_f_10000,235_t_20000,246_244'
        )
    ],[
        Markup.button.url('Top budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=10&city_id=10&with_newbuilds=0&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&d_id=15190%3A18201%3A18213%3A18214%3A18215%3A18216%3A18217%3A18315&ch=235_f_20000,246_244')
    ]]))
})

commonScene.action('yes2', (ctx)=>{
    ctx.answerCbQuery()
    ctx.replyWithSticker(values.sticker_medium)
    ctx.reply('Choose your budget and enjoy!', Markup.inlineKeyboard([[
        Markup.button.url('Low budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=10&city_id=10&with_newbuilds=0&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&d_id=15189%3A18182%3A18183%3A18184%3A18185%3A18186%3A18310%3A20294%3A20295&ch=235_t_10000,246_244'),
        Markup.button.url('Medium budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=10&city_id=10&with_newbuilds=0&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&d_id=15189%3A18182%3A18183%3A18184%3A18185%3A18186%3A18310%3A20294%3A20295&ch=235_f_10000,235_t_20000,246_244')
    ],[
        Markup.button.url('Top budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=10&city_id=10&with_newbuilds=0&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&d_id=15189%3A18182%3A18183%3A18184%3A18185%3A18186%3A18310%3A20294%3A20295&ch=235_f_20000,246_244')
    ]]))
})

commonScene.action('yes3', (ctx)=>{
    ctx.answerCbQuery()
    ctx.replyWithSticker(values.sticker_low)
    ctx.reply('Choose your budget and enjoy!', Markup.inlineKeyboard([[
        Markup.button.url('Low budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=2&city_id=2&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&with_newbuilds=0&d_id=15275%3A15276%3A15279%3A15281%3A15285%3A15286%3A15287%3A15290%3A15548%3A15549%3A16160%3A17884%3A17885%3A17886%3A17887%3A17888%3A20024%3A20025%3A20026%3A20027%3A20028%3A20029%3A20030%3A20031&ch=235_t_8000,246_244'),
        Markup.button.url('Medium budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=2&city_id=2&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&with_newbuilds=0&d_id=15275%3A15276%3A15279%3A15281%3A15285%3A15286%3A15287%3A15290%3A15548%3A15549%3A16160%3A17884%3A17885%3A17886%3A17887%3A17888%3A20024%3A20025%3A20026%3A20027%3A20028%3A20029%3A20030%3A20031&ch=235_f_8000,235_t_15000,246_244')
    ],[
        Markup.button.url('Top budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=2&city_id=2&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&with_newbuilds=0&d_id=15275%3A15276%3A15279%3A15281%3A15285%3A15286%3A15287%3A15290%3A15548%3A15549%3A16160%3A17884%3A17885%3A17886%3A17887%3A17888%3A20024%3A20025%3A20026%3A20027%3A20028%3A20029%3A20030%3A20031&ch=235_f_10000,246_244')
    ]]))
})

commonScene.action('yes4', (ctx)=>{
    ctx.answerCbQuery()
    ctx.replyWithSticker(values.sticker_low)
    ctx.reply('Choose your budget and enjoy!', Markup.inlineKeyboard([[
        Markup.button.url('Low budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=2&city_id=2&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&with_newbuilds=0&d_id=15277%3A15282%3A15283%3A15284%3A15288%3A15289%3A15553%3A16158%3A16159%3A17501%3A17889%3A20020%3A20021%3A20023&ch=235_t_8000,246_244'),
        Markup.button.url('Medium budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=2&city_id=2&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&with_newbuilds=0&d_id=15277%3A15282%3A15283%3A15284%3A15288%3A15289%3A15553%3A16158%3A16159%3A17501%3A17889%3A20020%3A20021%3A20023&ch=235_f_8000,235_t_15000,246_244')
    ],[
        Markup.button.url('Top budget', 'https://dom.ria.com/uk/search/?category=1&realty_type=2&operation=3&state_id=2&city_id=2&price_cur=1&wo_dupl=0&inspected=0&sort=inspected_sort&period=0&notFirstFloor=0&notLastFloor=0&firstIteraction=false&type=list&limit=20&page=0&client=searchV2&with_newbuilds=0&d_id=15277%3A15282%3A15283%3A15284%3A15288%3A15289%3A15553%3A16158%3A16159%3A17501%3A17889%3A20020%3A20021%3A20023&ch=235_f_15000,246_244')
    ]]))
})

bot.hears('city', (ctx)=>{ctx.reply(city)})

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
            console.log(e)
        }
    })
}

bot.start(async(ctx) => {
    try{
        await ctx.reply(`Hey, ${ctx.message.from.first_name ? ctx.message.from.first_name : '*unknown person*'}!`),
        await ctx.telegram.sendMessage(ctx.message.chat.id, 'Are you searching for new appartaments?', Markup
            .keyboard([
                ['Yes😎', 'No🙅'],
                ['/help']
            ])
            .oneTime()
            .resize(),
            Markup.removeKeyboard()
        )
    }catch(e){
        console.log(e)
    }
})

const stage = new Stage([ commonScene ])
stage.hears('exit', ctx => ctx.scene.leave())
bot.use(session())
bot.use(stage.middleware())

bot.hears('Yes😎', async(ctx) => {
    await Markup.removeKeyboard(true)
    await ctx.scene.enter('commonScene')
})

bot.hears('No🙅', async ctx => {
    await ctx.replyWithSticker('CAACAgIAAxkBAAEDen1ht6PHCEDL5DO-Kzuen3sByTkQ2wACoAkAAtivmUpHjXj0g2tgJyME'),
    await ctx.reply(`Okey, ${ctx.message.from.first_name}, waiting for you later.`)
});

bot.on('sticker', (ctx)=> {
    ctx.reply('Nice sticker!'),
    ctx.reply('But...'),
    ctx.scene.enter('commonScene')
})

bot.help((ctx) => ctx.reply(values.commands))

bot.command('credits', async(ctx)=>{ 
    try{
        await ctx.replyWithHTML(
            '<strong> by.Lialoy </strong>', Markup.inlineKeyboard([
                [Markup.button.callback('Instagram', 'btn_1'),
                Markup.button.callback('Telegram', 'btn_2')]
            ])    
        )
    }catch(e){
    console.log(e)
    }
})  
addActionBot('btn_1', './img/1.jpg/', values.text1)
addActionBot('btn_2', './img/2.jpg/', values.text2)

bot.launch()
console.log('by Lialoy')
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))