// const { schedule } = require("@netlify/functions");
// const checkStackOverflow = require('../../checkStackOverflow');
// const sendMessage = require('../../sendMessage');

exports.handler = async (event, context) => {
    console.log(event.body)

    // console.log('You have got a message', event.body);
    // const { message } = JSON.parse(event.body);

    // if (message.text.match(/\/check/)) {
    //     const days = await checkStackOverflow();
    //     await sendMessage(message.chat.id, `🔑 ${days}\n📅 Last checked on ${new Date().toLocaleString()}`);
    // } else {
    //     await sendMessage(message.chat.id, `I don't know what you mean`);
    // }

    return {
        statusCode: 200
    };
};

// exports.handler = schedule("*/3 * * * *", handler);