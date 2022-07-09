let handler = async m => m.reply(`
            .✵.GRUP AZZBOT.✵.

            https://chat.whatsapp.com/JqmFzJF0bbZ13yQk5OwUF7
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler