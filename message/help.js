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

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

/*
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
*/



exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return `                        「⫺*${botName}*⫹」

 
 ╭─⫹⫺ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 ⫹⫺
 ├ ❖ *Nama* : ${pushname}
 ├ ❖ *Status* : ${isPremium ? 'Premium':'Free'}
 ├ ❖ *Saldo* : Rp ${saldo}
 ├ ❖ *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
 ├ ❖ *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}
 ╰⫹⫺────────────────❒
 
╭─⫹⫺ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 ⫹⫺
├ ❖ *Nama Bot* : ${botName}
├ ❖ *Mode* : ${publik ? "Public" : "Self"}
├ ❖ *Time* : ${timeWib} WIB 
├ ❖ *Islamic* : ${dateIslamic}
├ ❖ *Hit Today* : ${thisHit.toLocaleString()}
├ ❖ *Total Fitur* : ${totalFitur()}
├ ❖ *Device* : Nokia
├ ❖ *Running* : ${runWith} 
├ ❖ *Total Error* : ${db.data.listerror.length}
├ ❖ *Total User* : ${Object.keys(db.data.users).length}
├ ❖ *User Banned* : ${db.data.banned.length}
├ ❖ *Cmd Blocked* : ${db.data.blockcmd.length} 
╰⫹⫺──────────────❒
    ${readmore}`}

exports.fitur = (prefix) => {
return`

╭━━•›〘 ⫹⫺ *SUBMENU* 〙
│ 㞮  .allmenu
│ 㞮  .gamemenu
│ 㞮  .downloadmenu
│ 㞮  .gcmenu
│ 㞮  .makermenu
│ 㞮  .searchingmenu
│ 㞮  .aimenu
│ 㞮  .stikermenu
│ 㞮  .emojimenu
│ 㞮  .gambarmenu
│ 㞮  .usermenu
│ 㞮  .randommenu
│ 㞮  .ownermenu
│ 㞮  .testimenu
╰━━━━━━━━•⩵[⽂ *Nexus* 㕚]
 
╭━━•›〘 ⫹⫺ 𝙈𝙖𝙞𝙣 〙
│ 㞮 .restapi                  
│ 㞮 .menu
│ 㞮 .sewa
│ 㞮 .donasi
│ 㞮 .owner
│ 㞮 .dashboard
│ 㞮 .gcbot
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
