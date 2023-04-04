const axios = require('axios').default;
const sendMessage = require('../../sendMessage');
exports.handler = async (event) => {
    console.log('You have got a message', event.body);
    const { message } = JSON.parse(event.body);
    await sendMessage(message.chat.id, 'I got your message!');
    return { statusCode: 200 };
};