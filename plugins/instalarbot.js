let handler = async m => m.reply(`
*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*

💥 𝐑𝐄𝐐𝐔𝐈𝐒𝐈𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 💥
➤ Termux  
➤ 1 GB de memoria en el teléfono
➤ Aconsejable un WhatsApp secundario
➤ Aconsejable un numero secundario
➤ 2 teléfonos o un 1 teléfono y una PC (es temporal - solo para escanear un código QR)

💥 𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 💥
➤ https://github.com/AllMightHero/NezukoBot

💥 𝐀𝐑𝐄𝐀 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 💥
➤ Termux: https://f-droid.org/en/packages/com.termux/
➤ WhatsApp recomendado: https://www.mediafire.com/file/j5vmyudprv012ol/%25E2%259E%25A2_SOLITARIO_BUSINESS_%25E2%259E%25A2_2.21.19.21.apk/file
   
💥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 𝐕𝐈𝐀 𝐆𝐈𝐓𝐇𝐔𝐁 💥
➤ apt update && apt upgrade -y -y
➤ apt install git -y
➤ apt install nodejs -y
➤ apt install ffmpeg -y
➤ apt install imagemagick -y
➤ git clone https://github.com/AllMightHero/NezukoBot
➤ cd NezukoBot
➤ npm install
➤ npm install -g npm@8.4.0
➤ npm update
➤ npm start
° Escaneas el código QR tienes 30 segundos para hacerlo

💥 INFO EXTRA 💥
➤ Se sugiere leer el archivo README.md 
➤ Para habilitar el /añadir y el /sacar usa #enable autoread
- Puede ocasionar que el numero se vaya a soporte
➤ Numero de ayuda durante la instalacion: wa.me/525518064309 (No Bot, solo ayuda durante la instalación)

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
