const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Add Your Api Key ( Contact https://wa.me//+1(917)243-9704?text=Api_Key to buy api Key (Low Price...❤️) )
    API_KEY: 'free',
    // Put your bot's owner number.
    OWNER: '94723975388',
    // Set image.
    THUMBNAIL: 'https://files.catbox.moe/slm10t.jpg', 
    // Set Bot's SinhalaSub image.
    SINHALA_SUB: 'https://i.ibb.co/PsFZCxCQ/images.png',
    // Set Bot's Cinesubz image.
    CINESUBZ: 'https://i.ibb.co/vxcWWrCD/99a8f519d0b1975a.jpg',
    // Set Bot's Baiscope image.
    BAISCOPE: 'https://i.ibb.co/39qs4RK4/1679311670111.jpg',
    // Set Bot's SexMv image.
    SX_MV: 'https://i.ibb.co/4RgkDKqn/parental-advisory-explicit-content-18-years-grunge-round-red-warning-stamp-isolated-on-white-vector.jpg',
    // Add Jid
    JID: '120363198820426967@g.us',
    // Set Bot's Name. ( 𝙳𝙾 𝙽𝙾𝚃 𝙲𝙷𝙰𝙽𝙶𝙴)
    BOT_NAME: '𝐃𝐀𝐑𝐊 𝐒𝐇𝐀𝐃𝐎𝐖',
    // Define the bot's footer or signature. ( 𝙳𝙾  𝙽𝙾𝚃 𝙲𝙷𝙰𝙽𝙶𝙴 🚫)
    FOOTER: '𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆😈'
};
