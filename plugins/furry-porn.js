const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*Â¿Si me pongo de perrito, me adoptas? ð¥ð¥´*", 'Â©ðð£ð¦ðððð¥ð -ðð®ðð¾ð´ð¸ðð¸ð½', 'ð¥µ SIGUIENTE ð¥µ', `${usedPrefix + command}`, 'ð¥ LABIBLIA ð¥', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(furry|furro|furr@|furra|furrys|furros|furr@s|furras|furri|furris)$/i
module.exports = handler
