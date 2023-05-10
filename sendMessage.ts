import axios from 'axios';

export const sendMessage = async (chat_id, text) => {
    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    await axios.post(url, {
        chat_id,
        text,
        parse_mode: 'MarkdownV2'
    });
    return true;
};