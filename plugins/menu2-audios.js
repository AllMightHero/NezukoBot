let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*_ãð Hola ${username} ðå½¡_*

*<MENU DE AUDIOS/>*
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

Â° à¶¬âð _Noche de paz_
Â° à¶¬âð _Buenos dias_
Â° à¶¬âð _Audio hentai_
Â° à¶¬âð _Fiesta del admin_
Â° à¶¬âð _Fiesta del admin 2_
Â° à¶¬âð _Viernes_
Â° à¶¬âð _Chica lgante_
Â° à¶¬âð _Baneado_
Â° à¶¬âð _Feliz navidad_
Â° à¶¬âð _A nadie le importa_
Â° à¶¬âð _Sexo_
Â° à¶¬âð _Vete a la vrg_
Â° à¶¬âð _Hola_
Â° à¶¬âð _Un pato_
Â° à¶¬âð _Nyanpasu_
Â° à¶¬âð _Te amo_
Â° à¶¬âð _Yamete_
Â° à¶¬âð _Te diagnostico con gay_
Â° à¶¬âð _Quien es tu sempai botsito 7w7_
Â° à¶¬âð _BaÃ±ate_
Â° à¶¬âð _Vivan los novios_
Â° à¶¬âð _Marica quien_
Â° à¶¬âð _Es puto_
Â° à¶¬âð _La biblia_
Â° à¶¬âð _Onichan_
Â° à¶¬âð _Bot puto_
Â° à¶¬âð _Feliz cumpleaÃ±os_
Â° à¶¬âð _Shadow Bot_
Â° à¶¬âð _Pasa pack Bot_
Â° à¶¬âð _Atencion grupo_
Â° à¶¬âð _Oh me vengo_
Â° à¶¬âð _Murio el grupo_
Â° à¶¬âð _Siuuu_
Â° à¶¬âð _Rawr_
Â° à¶¬âð _UwU_
Â° à¶¬âð _:c_
Â° à¶¬âð _a_

*_ã âðð«ð¦ðð ð¹ð ð¥  ã_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu2|audios|menÃº2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
