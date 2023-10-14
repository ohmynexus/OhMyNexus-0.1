const version = require("@adiwajshing/baileys/package.json").version


global.language = "id"
global.nomerOwner = ["6282177779477"]
global.developer1 = ["6282177779477"]
global.instagram = "https://www.instagram.com/addykece_/"
global.email = "addykece010911@hotmail.com"
global.runWith = "GRog 20871XTz"
global.botName = "OhMyNexus - Bot" 
global.sessionName ="session"
global.setmenu ="location" 
global.docType = "docx" 
global.public = true
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = true
global.copyright = `Bot WhatsApp⁰⁵`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = ""
global.authorName = "OhMyNexus\naddykece_"
global.replyType = "mess"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.keylol = "haikalgans" //isi pakai api key lol human lu
global.rosekey = "Rk-bd116451aa3883e018c20c1b_free_tier
"
global.apiwtf = "KiiCode"
global.token = "13cc2eee-5315-4d84-b3c8-d5b05ce297c3"
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz" //daftar di filestack
global.gcounti = {
'prem' : 1000,
'user' : 5
} 


const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






