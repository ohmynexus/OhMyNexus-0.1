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

╭─❒
├*Hallo kak* @${pushname}
├*Status* : ${isPremium ? 'Premium':'Free'}
├*Nomor* : wa.me/${sender.split("@")[0]}
╰─❒
Fitur Nya di coba ya, jngan liatin doang •~•

▾`}
exports.fitur = (prefix) => {
return`
`+readmore+` 乂 *𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶* 乂


 *≻*  .totag
 *≻*  .autosimi
 *≻*  .antilink    
 *≻*  .antilinkgc   
 *≻*  .antivirtex
 *≻*  .antiasing
 *≻*  .welcome on/off
 *≻*  .addkick
 *≻*  .delkick
 *≻*  .listkick
 *≻*  .infogc 
 *≻*  .linkgc 
 *≻*  .setppgc 
 *≻*  .setnamegc 
 *≻*  .setdesc 
 *≻*  .gc open/close 
 *≻*  .revoke 
 *≻*  .hidetag 
 *≻*  .kick  _fitur ini tutup_
 *≻*  .add  _fitur ini tutup_
 *≻*  .opentime 
 *≻*  .closetime 
 *≻*  .demote 
 *≻*  .promote 
 *≻*  .kickme 
 *≻*  .ban 
 *≻*  .unban 
 *≻*  .listban 
 *≻*  .getppgc 
 *≻*  .getpp 
 *≻*  .getidgc 
 *≻*  .listonline 

` 
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
