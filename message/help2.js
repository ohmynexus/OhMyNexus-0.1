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


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
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
`+readmore+`
⫹⫺ 𝗠𝗔𝗜𝗡

▸ .menu
▸ .sewa
▸ .owner
▸ .dashboard
▸ .gcbot


⫹⫺ 𝗡𝗦𝗙𝗪

▸ .nsfw 

 
⫹⫺ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗

▸ .play   
▸ .instagram  
▸ .tiktokmusik 
▸ .tiktoknowm
▸ .mediafire 
▸ .gdrive
▸ .zippyshare
▸ .gitclone 
▸ .igstory
▸ .ytmp4 
▸ .facebook
▸ .twiterdl 
▸ .ytmp3 


⫹⫺ 𝗥𝗔𝗡𝗗𝗢𝗠

▸ .nulis
▸ .ktpmaker
▸ .ocr
▸ .jadianime
▸ .truth
▸ .menfes
▸ .dare    
▸ .jarak 
▸ .tagme
▸ .tagwa
▸ .dashboard
▸ .resize
▸ .cecan 
▸ .cogan
▸ .wallml 
▸ .caridoi
▸ .inspect 
▸ .kalkulator
▸ .tr 
▸ .volume 
▸ .ss
▸ .speed 
▸ .status
▸ .runtime 
▸ .chat 
▸ .rules


⫹⫺ 𝗚𝗔𝗠𝗘

▸ .susunkata 
▸ .siapaaku
▸ .tekateki
▸ .tebaktebakan 
▸ .tebakkimia
▸ .tebakgambar
▸ .tebaklagu
▸ .family100 
▸ .caklontong 
▸ .tebaklirik 
▸ .tictactoe
▸ .suit


⫹⫺ 𝗨𝗦𝗘𝗥

▸ .limit 
▸ .claim
▸ .sewa
▸ .buyglimit
▸ .buylimit 
▸ .transfer
▸ .premium 
▸ .profil 
▸ .topbalance


⫹⫺ 𝗦𝗧𝗔𝗟𝗞𝗜𝗡𝗚

▸ .ffstalk
▸ .mlstalk


⫹⫺ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧

▸ .anonymous
▸ .start
▸ .startchat
▸ .keluar
▸ .next
▸ .sendkontak
▸ .invite
▸ .joinchat


⫹⫺ 𝗦𝗘𝗔𝗥𝗖𝗛

▸ .pinterest 
▸ .gimage 
▸ .lirik 
▸ .yts
▸ .whatmusic 
▸ .weather
▸ .kodepos 
▸ .infogempa 


⫹⫺ 𝗦𝗛𝗢𝗥𝗧 𝗨𝗥𝗟

▸ .tinyurl 
▸ .bitly   
▸ .tourl   
▸ .anonfile 


⫹⫺ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥

▸ .anticolong
▸ .stiktele
▸ .qc
▸ .sticker 
▸ .smeme 
▸ .triggered 
▸ .ttp 
▸ .attp 
▸ .stikpetrik 
▸ .stikbucin 
▸ .stikdoge 
▸ .stikgura
▸ .wasted 
▸ .comrade
▸ .horny
▸ .blur
▸ .pixelate
▸ .simpcard
▸ .lolice
▸ .glass
▸ .take 


⫹⫺ 𝗚𝗥𝗢𝗨𝗣

▸ .warn
▸ .totag
▸ .unwarn
▸ .cekwarn
▸ .autosimi
▸ .antilink    
▸ .antilinkgc   
▸ .antivirtex
▸ .antiasing
▸ .infogc 
▸ .linkgc 
▸ .setppgc 
▸ .setnamegc 
▸ .setdesc 
▸ .gc 
▸ .revoke 
▸ .hidetag 
▸ .kick 
▸ .add 
▸ .opentime 
▸ .closetime 
▸ .demote 
▸ .promote 
▸ .kickme 
▸ .banchat 
▸ .unbanchat 
▸ .ban
▸ .unban
▸ .listban 
▸ .getppgc 
▸ .getpp 
▸ .listonline 


⫹⫺ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥

▸ .toimg 
▸ .tomp3 
▸ .tomp4 
▸ .toptt 
▸ .togif 
▸ .hode 
▸ .ghost 
▸ .nightcore 
▸ .tupai 
▸ .imut 
▸ .emojimix


⫹⫺ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗘𝗠𝗢𝗝𝗜

▸ .emojitw
▸ .emojiwa
▸ .emojimc
▸ .emojism
▸ .emojigo
▸ .emojifb
▸ .emojisk
▸ .emojipi
▸ .emojiom
▸ .emojied
▸ .emojisd
▸ .emojimz
▸ .emojiht
▸ .emojilg
▸ .emojims
▸ .emojidc
▸ .emojiap


⫹⫺ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗔𝗡𝗜𝗠𝗘

▸ .cry
▸ .kill
▸ .hug
▸ .pat
▸ .lick
▸ .kiss
▸ .bite
▸ .yeet
▸ .neko
▸ .bully
▸ .bonk
▸ .wink
▸ .poke
▸ .nom
▸ .slap
▸ .smile
▸ .wave
▸ .awoo
▸ .blush
▸ .smug
▸ .glomp
▸ .happy
▸ .dance
▸ .cringe
▸ .cuddle
▸ .highfive
▸ .shinobu
▸ .megumin
▸ .handhold


⫹⫺ 𝗘𝗣𝗛𝗢𝗧𝗢

▸ .glitchtext
▸ .writetext
▸ .advancedglow
▸ .typographytext
▸ .pixelglitch
▸ .neonglitch
▸ .flagtext
▸ .flag3dtext
▸ .deletingtext
▸ .blackpinkstyle
▸ .glowingtext
▸ .underwatertext
▸ .logomaker
▸ .cartoonstyle
▸ .papercutstyle
▸ .watercolortext
▸ .effectclouds
▸ .blackpinklogo
▸ .gradienttext
▸ .summerbeach
▸ .luxurygold
▸ .multicoloredneon
▸ .sandsummer
▸ .galaxywallpaper
▸ .1917style
▸ .makingneon
▸ .royaltext
▸ .freecreate
▸ .galaxystyle
▸ .lighteffects


⫹⫺ 𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬

▸ .shadow
▸ .write
▸ .romantic
▸ .burnpaper
▸ .smoke
▸ .narutobanner
▸ .love
▸ .undergrass
▸ .doublelove
▸ .coffecup
▸ .underwaterocean
▸ .smokyneon
▸ .starstext
▸ .rainboweffect
▸ .balloontext
▸ .metalliceffect
▸ .embroiderytext
▸ .flamingtext
▸ .stonetext
▸ .writeart
▸ .summertext
▸ .wolfmetaltext
▸ .nature3dtext
▸ .rosestext
▸ .naturetypography
▸ .quotesunder
▸ .shinetext

   
⫹⫺ 𝗜𝗠𝗔𝗚𝗘 𝗠𝗔𝗞𝗘𝗥

▸ .wanted 
▸ .utatoo
▸ .unsharpen    
▸ .thanos    
▸ .sniper    
▸ .sharpen     
▸ .sepia     
▸ .scary    
▸ .rip    
▸ .redple     
▸ .rejected    
▸ .posterize    
▸ .ps4     
▸ .pixelize    
▸ .missionpassed    
▸ .moustache    
▸ .lookwhatkarenhave   
▸ .jail     
▸ .invert    
▸ .instagram    
▸ .greyscale    
▸ .glitch    
▸ .gay     
▸ .frame    
▸ .fire    
▸ .distort     
▸ .dictator    
▸ .deepfry     
▸ .dungeon     
▸ .circle     
▸ .challenger    
▸ .burn    
▸ .brazzers    
▸ .beautiful    
▸ .approved     
▸ .3000years    
▸ .candy
▸ .christmas
▸ .3dchristmas
▸ .sparklechristmas
▸ .deepsea
▸ .scifi
▸ .rainbow
▸ .waterpipe
▸ .spooky
▸ .pencil
▸ .circuit
▸ .discovery
▸ .metalic
▸ .fiction
▸ .demon
▸ .transformer
▸ .berry
▸ .thunder
▸ .magma
▸ .3dstone
▸ .neonlight
▸ .glitch
▸ .harrypotter
▸ .brokenglass
▸ .papercut
▸ .watercolor
▸ .multicolor
▸ .neondevil
▸ .underwater
▸ .graffitibike
▸ .snow
▸ .cloud
▸ .honey
▸ .ice
▸ .fruitjuice
▸ .biscuit
▸ .wood
▸ .chocolate
▸ .strawberry
▸ .matrix
▸ .blood
▸ .dropwater
▸ .toxic
▸ .lava
▸ .rock
▸ .bloodglas
▸ .hallowen
▸ .darkgold
▸ .joker
▸ .wicker
▸ .firework
▸ .skeleton
▸ .blackpink
▸ .sand
▸ .glue
▸ .1917
▸ .leaves


⫹⫺ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 𝗕𝗢𝗧

▸ .setprefix
▸ .setthumb
▸ .setppbot
▸ .setfakeimg
▸ .setimgreply 
▸ .setimginfo 
▸ .setreply 
▸ .setbio
▸ .setgif
▸ .setfakegif
▸ .setimgweb    
▸ .setimgdoc   
▸ .setimgquoted 
▸ .setmenu   


⫹⫺ 𝗦𝗧𝗢𝗥𝗔𝗚𝗘

▸ .adderror    
▸ .addstik    
▸ .addvn    
▸ .delvn   
▸ .delstik    
▸ .clearallerror    
▸ .liststik
▸ .listerror


⫹⫺ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘

▸ .addsewa
▸ .ceksewa
▸ .addowner
▸ .addcmdowner
▸ .addcmdlimit
▸ .addcmdprem
▸ .listowner
▸ .listcmdowner
▸ .listcmdlimit
▸ .listcmdprem
▸ .clearallerror
▸ .clearalluser
▸ .clearallban
▸ .clearallblock
▸ .addkick
▸ .delkick
▸ .listkick


⫹⫺ 𝗢𝗪𝗡𝗘𝗥

▸ .unbanwa
▸ .filetozip
▸ .join ${feat("join")? yes :no}
▸ .bc ${feat("bc")? yes :no}
▸ .bcgc ${feat("bcgc")? yes :no}
▸ .react ${feat("react")? yes :no}
▸ .block ${feat("block")? yes :no}
▸ .unblock ${feat("unblock")? yes :no}
▸ .getcase ${feat("getcaze")? yes :no}
▸ .getfile ${feat("getfile")? yes :no}
▸ .listpc ${feat("listpc")? yes :no}
▸ .listgc ${feat("listgc")? yes :no}
▸ .> / x evalcode
▸ .=> evalcode2
▸ .$ executor


` 
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
