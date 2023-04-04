const axios = require('axios').default;
const sendMessage = require('../../sendMessage');
const messageParts = require('../../messageParts');

exports.handler = async (event) => {
    console.log('You have got a message', event.body);
    const { message } = JSON.parse(event.body);
    const { command, botName, extra } = messageParts(message.text);

    if (botName === 'mister_gold_serverless_bot' || botName === null) {
        await sendMessage(message.chat.id, 'I got your message!');
    }

    return { statusCode: 200 };
};