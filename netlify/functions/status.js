const { Client } = require('@notionhq/client');
const { sendMessage } = require("../../sendMessage");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DB_ID;
exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);

    if (message.text.match(/\/status/)) {
        const response = await notion.databases.query({
            database_id: databaseId,
            sorts: [{
                property: 'Status',
                direction: 'descending'

            }]
        });

        const consecutiveDaysCount = response.results[0].properties.Status.title[0].plain_text;

        await sendMessage(message.chat.id, `🔑 ${consecutiveDaysCount}`);
    } else {
        await sendMessage(message.chat.id, `I don't know what you mean`);
    }

    return {
        statusCode: 200
    };
};