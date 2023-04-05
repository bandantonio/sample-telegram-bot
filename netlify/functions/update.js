const axios = require('axios').default;
const sendMessage = require('../../sendMessage');
const messageParts = require('../../messageParts');

exports.handler = async (event) => {
    console.log('You have got a message', event.body);
    const { message } = JSON.parse(event.body);
    const { command, botName, extra } = messageParts(message.text);

    if (botName === 'mister_gold_serverless_bot' || botName === null) {
        switch (command) {
            case 'echo':
                await sendMessage(message.chat.id, extra || 'BOO 👻');
                break;
            default:
                await sendMessage(message.chat.id, `I don't know what you mean`);
        }
    }

    return { statusCode: 200 };
};