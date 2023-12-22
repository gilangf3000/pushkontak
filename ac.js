
const fs            = require('fs')
const chalk         = require('chalk')
const moment        = require('moment-timezone')

global.grup         = 'https://chat.whatsapp.com/KJD2nB7j7lfHux9AVQCra4'
global.ig           = '@autoresbot'
global.thumb        = fs.readFileSync("./databot/image/thumb.jpg")
global.email        = 'autoresbot@gmail.com'
global.region       = 'indonesia'

global.ownername    = 'Autoresbot'
global.domain       = 'https://panel.autoresbot.com'
global.apikey2      = 'xxx' //  Apikey Pltc Dari Panel Kalo admin
global.capikey2     = 'xxx' //  Apikey Plta 
global.eggsnya      = '15' // id eggs yang dipakai
global.location     = '1' // id location
global.owner        = ['62895328005151']
global.keyopenai    = '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'
global.ibeng        = 'Yl4h5x9wiA'
global.botname      = 'Autoresbot'
global.packname     = 'Autoresbot'
global.author       = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: Azhari Creative\nBot: 0895-3280-05151`
global.prefa        = ['','!','.',',','🐤','🗿']
global.sessionName  = 'Autoresbot'
global.sp           = '⭔'
global.anticall     = true

global.mess         = {
    success: '🤗 Done ~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Upgrade Ke Premium Cuma 5k* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k',
}

global.limitawal = {
    premium: "Infinity",
    free: 60
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})