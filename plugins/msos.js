let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*By ShadowBot and ConfuMods*\n*https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods*', '©𝓝𝓮𝔃𝓾𝓴𝓸𝓑𝓸𝓽', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(muslitos)$/i

module.exports = handler
