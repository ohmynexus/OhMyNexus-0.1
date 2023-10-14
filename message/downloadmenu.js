const version = require("@adiwajshing/baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jayapura").locale("id");

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}




exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return `*${botName}*

╭─❒〘 *Info User* 〙
├ ❖ *Hallo kak* @${pushname}
├ ❖ *Status* : ${isPremium ? 'Premium':'Free'}
├ ❖ *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
├ ❖ *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}
├ ❖ *Saldo* : Rp ${saldo}
╰─❒`}

  exports.fitur = (prefix) => {
return`
`+readmore+`
╭━━•›〘 *Downloader* 〙
│ 㞮  .play   
│ 㞮  .play2 _dokumen_
│ 㞮  .instagram  
│ 㞮  .tiktokmusik 
│ 㞮  .tiktoknowm
│ 㞮  .capcutdl
│ 㞮  .capcutmusik
│ 㞮  .mediafire 
│ 㞮  .gdrive
│ 㞮  .zippyshare
│ 㞮  .gitclone  
│ 㞮  .igstory 
│ 㞮  .ytmp4 
│ 㞮  .facebook 
│ 㞮  .twiterdl 
│ 㞮  .ytmp3 
│ 㞮  .carimusik
╰━━━━━━━━━•⩵[⽂ *Nexus* 㕚]

 
` 
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
