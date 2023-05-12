const axios = require('axios');

exports.sendMessage = async (chat_id, text) => {
    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    await axios.post(url, {
        chat_id,
        text,
        parse_mode: 'MarkdownV2'
    });
    return true;
};