exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar sayang~`
}

exports.ok = () => {
    return `✅ Done. Ok desu~`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner!`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Hallo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname) =>{
	return`Hai Orang Yang Paling Beban ${pushname} 🗿 Saya Ucapkan Selamat ${salam} Dan Semoga Bahagia Dengan Pasangannya 🥰 , 

「 O p e n  S e w a  B o t  ! 」
╭─❒ 「 Sewa Bot Untuk Kebutuhan 」🤖
├ LIST HARGA IN HERE! 👇
├ 
├ 1 BULAN : 25K
├ 2 MINGGU : 15K
├
├ *NOTE : INI BELUM TERMASUK MENJADI MEMBER PREMIUM!*
╰❒ 「 📍 BANG KENAPA KOK MAHAL? YA KARNA KALO BOT ITU GAMPANG KE BANNED OLEH WHATSAPP! 📍 」

「  O p e n  R u n  B o t  !  」
╭─❒ 「 Run Bot Untuk Nyantai 」🚬
├ LIST HARGA IN HERE! 👇
├
├ 1 MINGGU : 10K
├ 1 BULAN : 20K
├ PERMANENT : BISA DI BICARAKAN DENGAN OWNER!
├
├ *NOTE : UNTUK SCRIPT BISA DARI ELU ATAU PAKE SC GW ATAU BEBAS!*
╰❒ 「 📌JIKA DELAY ATAUPUN TIDAK MERESPON MUNGKIN KENDALA JARINGAN!📌 」

「 O p e n  P e m b u a t a n  L o g o ! 」
╭─❒ 「 Logo 」🎨
├ LOGO UNTUK TEAM ESPORT
├ LOGO UNTUK PRIBADI
├ LOGO UNTUK YOUTUBE
├ LOGO UNTUK FB
├ LOGO UNTUK JB
├ LOGO UNTUK WA
├ LOGO UNTUK IG
├ LOGO UNTUK SERTIFIKAT GAME
├ LOGO UNTUK WM EDIT
├
├ *NOTE : UNTUK HARGA TERGANTUNG LOGO. UNTUK WAKTU PEMBUATAN NYA 10-30 MENIT TERGANTUNG LOGO. DAN MOHON UNTUK TIDAK MENGSPAM KETIKA PEMBUATAN
BELUM MELEBIHI BATAS WAKTU!!.*
╰❒ 「 💠JIKA DI ATAS TIDAK ADA YANG KALIAN CARI SILAHKAN HUBUNGI OWNER UNTUK MENANYAKAN! DAN MOHON UNTUK TIDAK SPAM OWNER KARNA AKAN BERAKIBAT KALIAN TERBLOK PERMANENT💠 」      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} Beban ${pushname} 😷 Dan Semoga Harimau Badak Sapi Ahihi 😎🤙*
*⌚Time Server : ${time}*
*📚 Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.*
*📍Jangan Lupa Untuk Donasi Karna Donasi Kalian Adalah Semangat Owner Untuk Tetap On Bot Walaupun Sedang Sibuk!*
╭──❒  [ Owner 」 💉
├ Gue ga pernah nyesel kenal sama lu, karna lu adalah tokoh favorit yang pernah gw temui 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}sendsesi
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Group 」 💉
├ Dinding terbesar yang harus kamu panjat adalah yang kamu bangun di benakmu
├ ${prefix}antilink [on/off]
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 💉
├ Jangan kecewa merasa lelah, justru ia menjadi pengingat terbaik untuk targetmu.
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]


╭─❒ 「 Search 」 💉
├ Kamu tak akan bisa menjadi seorang pecundang,sampai kamu benar-benar berhenti untuk mencoba.
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 💉
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
├ ${prefix}emojimix [emot]
╰❒ ${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 💉
├ Hidupmu memang tak pernah sempurna. Namun Kamu bisa membuatnya menjadi lengkap, jika selalu berterima kasih.
├ ${prefix}wanted [reply image]
├ ${prefix}utatoo [reply image]
├ ${prefix}unsharpen [reply image]
├ ${prefix}thanos [reply image]
├ ${prefix}sniper [reply image]
├ ${prefix}sharpen [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}scary [reply image]
├ ${prefix}rip [reply image]
├ ${prefix}redple [reply image]
├ ${prefix}rejected [reply image]
├ ${prefix}posterize [reply image]
├ ${prefix}ps4 [reply image]
├ ${prefix}pixelize [reply image]
├ ${prefix}missionpassed [reply image]
├ ${prefix}moustache [reply image]
├ ${prefix}lookwhatkarenhave [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}instagram [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}glitch [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}frame [reply image]
├ ${prefix}fire [reply image]
├ ${prefix}distort [reply image]
├ ${prefix}dictator [reply image]
├ ${prefix}deepfry [reply image]
├ ${prefix}ddungeon [reply image]
├ ${prefix}circle [reply image]
├ ${prefix}challenger [reply image]
├ ${prefix}burn [reply image]
├ ${prefix}brazzers [reply image]
├ ${prefix}beautiful [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}red [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}bloo [reply image]
├ ${prefix}blue [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}green [reply image]
├ ${prefix}glass [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}blurple [reply image]
├ ${prefix}blurple2 [reply image]
├ ${prefix}wasted [reply image]
├ ${prefix}passed [reply image]
├ ${prefix}triggered [reply image]
├ ${prefix}comrade [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}threshold [reply image]
├ ${prefix}brightness [reply image]
╰❒ ${prefix}invertgreyscale [reply image]


╭─❒ 「 Download 」 💉
├ Hidup ini penuh perjuangan dalam perjalanan berjuang impian adalah bensin yang membakar semangat kita menuju impian dan cita-cita.
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link


╭─❒ 「 Random Anime 」💉
├ Galau itu wajar dan normal karena ia adalah proses penyesuaian diri dengan kehidupan yang lebih berkelas.
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Nsfw & Sfw 」💉
├ Love yourself instead of loving the idea of other people loving you.
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai

╭─❒ 「 Textpro Menu 」💉
├ Dorong dirimu sendiri, karena tidak ada orang lain yang akan melakukannya untukmu.
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Others 」💉
├ ${prefix}kalkulator
├ ${prefix}smeme [text]
├ ${prefix}memegen [text|text]
╰❒
╭─❒ 「 TqTo 」 
├ Fatih Aridho
├ AhmadChen
├ ZeeoneOfc
├ Penyedia Module
╰❒ And All Support

    `
}

exports.rules = (prefix) => {
    return `
╭─────[ *PERATURAN* ]─────✧
┴「 ANDA SOPAN KAMI PUN SEGAN! 」
│¹ Dilarang Hina Bot / Owner
│² Dilarang Spam Commands
│³ Dilarang Kirim Virtex / Virkon
│⁴ Dilarang Spam Menu Gak Jelas
│⁵ Dilarang Telpon / Vc bot
│⁶ Dilarang Culik Bot / Trial 2 Day
│⁷ Dilarang Promosi
│⁸ Dilarang Meniru pesan Bot
│⁹ Bot Tidak Menerima Save Kontak 🗿
│¹⁰ Dilarang Chat Owner Ga Jelas
│¹¹ No plagiat
┬
╰──────────···

「 O p e n  S e w a  B o t  ! 」
╭─❒ 「 Sewa Bot Untuk Kebutuhan 」🤖
├ LIST HARGA IN HERE! 👇
├ 
├ 1 BULAN : 25K
├ 2 MINGGU : 15K
├
├ *NOTE : INI BELUM TERMASUK MENJADI MEMBER PREMIUM!*
╰❒ 「 📍 BANG KENAPA KOK MAHAL? YA KARNA KALO BOT ITU GAMPANG KE BANNED OLEH WHATSAPP! 📍 」

「  O p e n  R u n  B o t  !  」
╭─❒ 「 Run Bot Untuk Nyantai 」📌
├ LIST HARGA IN HERE! 👇
├
├ 1 MINGGU : 10K
├ 1 BULAN : 20K
├ PERMANENT : 20K / BULAN
├
├ *NOTE : UNTUK SCRIPT BISA DARI ELU ATAU PAKE SC GW ATAU BEBAS!*
╰❒ 「 JIKA DELAY ATAUPUN TIDAK MERESPON MUNGKIN KENDALA JARINGAN! 」

「 O p e n  P e m b u a t a n  L o g o ! 」
╭─❒ 「 Logo 」🎨
├ LOGO UNTUK TEAM ESPORT
├ LOGO UNTUK PRIBADI
├ LOGO UNTUK YOUTUBE
├ LOGO UNTUK FB
├ LOGO UNTUK JB
├ LOGO UNTUK WA
├ LOGO UNTUK IG
├ LOGO UNTUK SERTIFIKAT GAME
├ LOGO UNTUK WM EDIT
╰❒ 「 JIKA DI ATAS TIDAK ADA YANG KALIAN CARI SILAHKAN HUBUNGI OWNER UNTUK MENANYAKAN! DAN MOHON UNTUK TIDAK SPAM OWNER KARNA AKAN BERAKIBAT KALIAN TERBLOK PERMANENT 」

╭─────[ *HUKUMAN* ]─────✧
┴ 「 HUKUMAN BILA MELANGGAR ATURAN/RULES BOT! 」
│ 1 & 11 = Block + banned permanent 🗿
│ 2,4,6 & 8 = Banned sementara ✌
│ 3 = War 👻
│ 5 = Block sementara ✨
│ 9 & 10 = Block permanent 🗿
┬

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon/vc bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

4. Bot Aktif Jika Owner Aktif!

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala error, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

「 📍TERIMAKASIH UNTUK KALIAN USER RAMAH!📍 」
`
}
exports.welcome = () =>{
	return`Hallo Beban Baru 🥰 Selamat Datang Di Grup

*INTRO DULU YA SAYANG*
📛 𝖭𝖺𝗆𝖺 :
🔞 𝖴𝗆𝗎𝗋 :
📌 Status :
╰ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 kak ~`
}
exports.leave = () =>{
	return`Yah beban out 😣 Lain kali kalo baperan ga usah masuk nanti malah jadi sider >.<
Goodbye Beban🔥`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*
Script : Yt ZeeoneOfc
Recode : Kaga Dulu Deh Bro Gw Juga Susah Payah Aowkwowkw
Note : *MAKA NYA GANTENG KONTOL!:V*
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONATE 」 ──*

Hai idoll😎
Jangan Cuma Make Nya Doang Tapi Harus Donasi
Juga Biar Bot On Always Time!
Kalian bisa donasi ke nomer di bawah!
Pulsa : 081224413305
Dana : 089695073357
Bank Cimb Niaga : Chat Owner!
Gopay,Dana,Ovo,And All Payment : Scan Qr!

Berapapun donasi kalian akan sangat berarti bagi bot/owner 👍
Thanks!

Contact person Owner:
wa.me/${ownernomer} (Owner)

    `
}

exports.ownermenu = (prefix) =>{
return`*Owner*
• < evaluate
• > evaluate
• $ exec
• => exec
• ${prefix}setmenu [query]
• ${prefix}setmenu templateLocation
• ${prefix}setmenu templateTenor
• ${prefix}sendsesi
• ${prefix}join [link]
• ${prefix}self
• ${prefix}public [only bot]
• ${prefix}del [pesan bot]
• ${prefix}setppbot [reply image]
`}

exports.group = (prefix) =>{
	return`*Group* 
• ${prefix}antilink [on/off]
• ${prefix}add [62***]
• ${prefix}linkgc
• ${prefix}group [open/close]
• ${prefix}tagall [text]
• ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*Anime*
• ${prefix}quotesanime
• ${prefix}anime [query]
• ${prefix}manga [query]
• ${prefix}character [query]
`}

exports.search = (prefix) =>{
	return`*Search*
• ${prefix}ytsearch [query]
• ${prefix}film [query]
• ${prefix}wallpaper [query]
• ${prefix}wikimedia [query]
• ${prefix}hentai
• ${prefix}wattpad [query]
• ${prefix}webtoons [query]
• ${prefix}drakor [query]
• ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*Converter*
• ${prefix}stiker [reply image]
• ${prefix}tourl [image/video]
• ${prefix}togif [sticker]
• ${prefix}tomp4 [sticker]
• ${prefix}toimg [reply sticker]
• ${prefix}emojimix [emot+emot]
`}

exports.effect = (prefix) =>{
	return`*Image Effect*
• ${prefix}wanted [reply image]
• ${prefix}utatoo [reply image]
• ${prefix}unsharpen [reply image]
• ${prefix}thanos [reply image]
• ${prefix}sniper [reply image]
• ${prefix}sharpen [reply image]
• ${prefix}sepia [reply image]
• ${prefix}scary [reply image]
• ${prefix}rip [reply image]
• ${prefix}redple [reply image]
• ${prefix}rejected [reply image]
• ${prefix}posterize [reply image]
• ${prefix}ps4 [reply image]
• ${prefix}pixelize [reply image]
• ${prefix}missionpassed [reply image]
• ${prefix}moustache [reply image]
• ${prefix}lookwhatkarenhave [reply image]
• ${prefix}jail [reply image]
• ${prefix}invert [reply image]
• ${prefix}instagram [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}glitch [reply image]
• ${prefix}gay [reply image]
• ${prefix}frame [reply image]
• ${prefix}fire [reply image]
• ${prefix}distort [reply image]
• ${prefix}dictator [reply image]
• ${prefix}deepfry [reply image]
• ${prefix}ddungeon [reply image]
• ${prefix}circle [reply image]
• ${prefix}challenger [reply image]
• ${prefix}burn [reply image]
• ${prefix}brazzers [reply image]
• ${prefix}beautiful [reply image]
• ${prefix}jail [reply image]
• ${prefix}red [reply image]
• ${prefix}gay [reply image]
• ${prefix}bloo [reply image]
• ${prefix}blue [reply image]
• ${prefix}sepia [reply image]
• ${prefix}green [reply image]
• ${prefix}glass [reply image]
• ${prefix}invert [reply image]
• ${prefix}blurple [reply image]
• ${prefix}blurple2 [reply image]
• ${prefix}wasted [reply image]
• ${prefix}passed [reply image]
• ${prefix}triggered [reply image]
• ${prefix}comrade [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}threshold [reply image]
• ${prefix}brightness [reply image]
• ${prefix}invertgreyscale [reply image]
`
}

exports.download = (prefix) =>{
return`*Download*
• ${prefix}tiktok [link]
• ${prefix}tiktoknowm [link]
• ${prefix}tiktokwm [link]
• ${prefix}tiktokaudio [link]
• ${prefix}ytdl [link]
• ${prefix}play [query]
• ${prefix}ytmp3 [link]
• ${prefix}ytshortmp3 [link]
• ${prefix}ytmp4 [link]
• ${prefix}ytshorts [link]
• ${prefix}facebook [link]
• ${prefix}facebooksd [link]
• ${prefix}facebookhd [link]
• ${prefix}fbaudio [link]
• ${prefix}igstory [username]
• ${prefix}igdl [link]
• ${prefix}igphoto [link]
• ${prefix}igvideo [link]
• ${prefix}igreels [link]
• ${prefix}igtv [link]
• ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*Random Anime*
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}bully
• ${prefix}cuddle
• ${prefix}cry
• ${prefix}hug
• ${prefix}awoo
• ${prefix}kiss
• ${prefix}lick
• ${prefix}pat
• ${prefix}smug
• ${prefix}bonk
• ${prefix}yeet
• ${prefix}blush
• ${prefix}smile
• ${prefix}wave
• ${prefix}highfive
• ${prefix}handhold
• ${prefix}nom
• ${prefix}bite
• ${prefix}glomp
• ${prefix}slap
• ${prefix}kill
• ${prefix}happy
• ${prefix}wink
• ${prefix}poke
• ${prefix}dance
• ${prefix}cringe
`
}

exports.textpro = (prefix) =>{
	return`*Textpro*
• ${prefix}halloween2 text|text2
• ${prefix}horror text|text2
• ${prefix}game8bit text|text2
• ${prefix}layered text|text2
• ${prefix}glitch2 text|text2
• ${prefix}coolg text|text2
• ${prefix}coolwg text|text2
• ${prefix}realistic text|text2
• ${prefix}space3d text|text2
• ${prefix}gtiktok text|text2
• ${prefix}stone text|text2
• ${prefix}marvel text|text2
• ${prefix}marvel2 text|text2
• ${prefix}pornhub text|text2
• ${prefix}avengers text|text2
• ${prefix}metalr text|text2
• ${prefix}metalg text|text2
• ${prefix}metalg2 text|text2
• ${prefix}halloween2 text|text2
• ${prefix}lion text|text2
• ${prefix}wolf_bw text|text2
• ${prefix}wolf_g text|text2
• ${prefix}ninja text|text2
• ${prefix}3dsteel text|text2
• ${prefix}horror2 text|text2
• ${prefix}lava text|text2
• ${prefix}bagel text|text2
• ${prefix}blackpink text
• ${prefix}rainbow2 text
• ${prefix}water_pipe text
• ${prefix}halloween text
• ${prefix}sketch text
• ${prefix}sircuit text
• ${prefix}discovery text
• ${prefix}metallic2 text
• ${prefix}fiction text
• ${prefix}demon text
• ${prefix}transformer text
• ${prefix}berry text
• ${prefix}thunder text
• ${prefix}magma text
• ${prefix}3dstone text
• ${prefix}neon text
• ${prefix}glitch text
• ${prefix}harry_potter text
• ${prefix}embossed text
• ${prefix}broken text
• ${prefix}papercut text
• ${prefix}gradient text
• ${prefix}glossy text
• ${prefix}watercolor text
• ${prefix}multicolor text
• ${prefix}neon_devil text
• ${prefix}underwater text
• ${prefix}bear text
• ${prefix}wonderfulg text
• ${prefix}christmas text
• ${prefix}neon_light text
• ${prefix}snow text
• ${prefix}cloudsky text
• ${prefix}luxury2 text
• ${prefix}gradient2 text
• ${prefix}summer text
• ${prefix}writing text
• ${prefix}engraved text
• ${prefix}summery text
• ${prefix}3dglue text
• ${prefix}metaldark text
• ${prefix}neonlight text
• ${prefix}oscar text
• ${prefix}minion text
• ${prefix}holographic text
• ${prefix}purple text
• ${prefix}glossyb text
• ${prefix}deluxe2 text
• ${prefix}glossyc text
• ${prefix}fabric text
• ${prefix}neonc text
• ${prefix}newyear text
• ${prefix}newyear2 text
• ${prefix}metals text
• ${prefix}xmas text
• ${prefix}blood text
• ${prefix}darkg text
• ${prefix}joker text
• ${prefix}wicker text
• ${prefix}natural text
• ${prefix}firework text
• ${prefix}skeleton text
• ${prefix}balloon text
• ${prefix}balloon2 text
• ${prefix}balloon3 text
• ${prefix}balloon4 text
• ${prefix}balloon5 text
• ${prefix}balloon6 text
• ${prefix}balloon7 text
• ${prefix}steel text
• ${prefix}gloss text
• ${prefix}denim text
• ${prefix}decorate text
• ${prefix}decorate2 text
• ${prefix}peridot text
• ${prefix}rock text
• ${prefix}glass text
• ${prefix}glass2 text
• ${prefix}glass3 text
• ${prefix}glass4 text
• ${prefix}glass5 text
• ${prefix}glass6 text
• ${prefix}glass7 text
• ${prefix}glass8 text
• ${prefix}captain_as2 text
• ${prefix}robot text
• ${prefix}equalizer text
• ${prefix}toxic text
• ${prefix}sparkling text
• ${prefix}sparkling2 text
• ${prefix}sparkling3 text
• ${prefix}sparkling4 text
• ${prefix}sparkling5 text
• ${prefix}sparkling6 text
• ${prefix}sparkling7 text
• ${prefix}decorative text
• ${prefix}chocolate text
• ${prefix}strawberry text
• ${prefix}koifish text
• ${prefix}bread text
• ${prefix}matrix text
• ${prefix}blood2 text
• ${prefix}neonligth2 text
• ${prefix}thunder2 text
• ${prefix}3dbox text
• ${prefix}neon2 text
• ${prefix}roadw text
• ${prefix}bokeh text
• ${prefix}gneon text
• ${prefix}advanced text
• ${prefix}dropwater text
• ${prefix}wall text
• ${prefix}chrismast text
• ${prefix}honey text
• ${prefix}drug text
• ${prefix}marble text
• ${prefix}marble2 text
• ${prefix}ice text
• ${prefix}juice text
• ${prefix}rusty text
• ${prefix}abstra text
• ${prefix}biscuit text
• ${prefix}wood text
• ${prefix}scifi text
• ${prefix}metalr text
• ${prefix}purpleg text
• ${prefix}shiny text 
• ${prefix}jewelry text
• ${prefix}jewelry2 text
• ${prefix}jewelry3 text
• ${prefix}jewelry4 text
• ${prefix}jewelry5 text
• ${prefix}jewelry6 text
• ${prefix}jewelry7 text
• ${prefix}jewelry8 text
• ${prefix}metalh text
• ${prefix}golden text
• ${prefix}glitter text
• ${prefix}glitter2 text
• ${prefix}glitter3 text
• ${prefix}glitter4 text
• ${prefix}glitter5 text
• ${prefix}glitter6 text
• ${prefix}glitter7 text
• ${prefix}metale text
• ${prefix}carbon text
• ${prefix}candy text
• ${prefix}metalb text
• ${prefix}gemb text
• ${prefix}3dchrome text
• ${prefix}metalb2 text
• ${prefix}metalg text
• ${prefix}metalg text
`
}

exports.nsfw = (prefix) =>{
	return`*Nsfw & Sfw*
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}blowjob
• ${prefix}cuckold
• ${prefix}cum
• ${prefix}ero
• ${prefix}femdom
• ${prefix}foot
• ${prefix}gangbang
• ${prefix}glasses
• ${prefix}jahy
• ${prefix}manga
• ${prefix}masturbation
• ${prefix}neko
• ${prefix}orgy
• ${prefix}panties
• ${prefix}pussy
• ${prefix}tentacles
• ${prefix}thighs
• ${prefix}yuri
• ${prefix}feet
• ${prefix}lewdkemo
• ${prefix}woof
• ${prefix}gasm
• ${prefix}solo
• ${prefix}8ball
• ${prefix}goose
• ${prefix}avatar
• ${prefix}hololewd
• ${prefix}gecg
• ${prefix}holo
• ${prefix}fox_girl
• ${prefix}tits
• ${prefix}eroyuri
• ${prefix}holoyero
• ${prefix}lizard
• ${prefix}keta
• ${prefix}eron
• ${prefix}erok
• ${prefix}kemonomimi
• ${prefix}cum_jpg
• ${prefix}nsfw_avatar
• ${prefix}erofeet
• ${prefix}meow
• ${prefix}wallpaper
• ${prefix}waifu
• ${prefix}trap
• ${prefix}lewd
• ${prefix}pussy_jpg
• ${prefix}futanari
• ${prefix}lewdk
• ${prefix}solog
• ${prefix}smug
• ${prefix}cum
• ${prefix}slap
• ${prefix}les
• ${prefix}erokemo
• ${prefix}bj
• ${prefix}pwankg
• ${prefix}pat
• ${prefix}poke
• ${prefix}feed
• ${prefix}nsfw_neko_gif
• ${prefix}pussy
• ${prefix}feetg
• ${prefix}baka
• ${prefix}hug
• ${prefix}kiss
• ${prefix}tickle
• ${prefix}spank
• ${prefix}kuni
• ${prefix}classic
• ${prefix}boobs
• ${prefix}anal
• ${prefix}ngif
• ${prefix}cuddle
• ${prefix}zettai
`
}

exports.other = (prefix) =>{
return`*Others*
• ${prefix}kalkulator
• ${prefix}smeme [text]
• ${prefix}memegen [text|text]

`
}

exports.tqto = () =>{
	return`*Thanks To*
• My God
• My Parents
• ZeeoneOfc
• AhmadChen
• Fatih Aridho
• Penyedia Module
• And All Support
`
}
