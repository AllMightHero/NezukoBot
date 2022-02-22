const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  //await m.reply(global.wait)
  try {
    let stonk = global.API('https://hardianto.xyz', '/api/stonk', {
    image: await conn.getProfilePicture(m.sender).catch(_ => ''),
    apikey: 'hardianto'})
    let stiker = await sticker(null, stonk, 'stonks', '𝕆𝕣𝕦𝕞𝕒𝕚𝕥𝕠 - 𝓝𝓮𝔃𝓾𝓴𝓸𝓑𝓸𝓽')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  } catch (e) {
  m.reply('Conversion fallida')
  }
}
handler.command = /^stonks$/i
handler.limit = false
handler.group = true
handler.register = false
module.exports = handler