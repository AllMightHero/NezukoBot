let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Incluso el mรกs fuerte de los oponentes tiene siempre una debilidad*', 'ยฉ๐๐ฎ๐๐พ๐ด๐ธ๐๐ธ๐ฝ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(itachi)$/i

module.exports = handler
