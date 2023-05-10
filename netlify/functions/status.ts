import { Client } from "@notionhq/client";
import { Handler } from "@netlify/functions";
// const checkStackOverflow = require('../../checkStackOverflow');
import { sendMessage } from "../../sendMessage";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DB_ID!;
export const handler: Handler = async (event) => {
    const { message } = JSON.parse(event.body!);

    if (message.text.match(/\/status/)) {
        const response = await notion.databases.query({
            database_id: databaseId,
            sorts: [{
                property: 'Next',
                direction: 'descending'

            }]
        });

        const consecutiveDaysCount = response.results[0].properties.Status.title[0].plain_text;
        const nextRunDate = response.results[0].properties.Next.rich_text[0].plain_text;

        const formattedResponse = `🔑 ${consecutiveDaysCount}\n📅 Next check at: ${nextRunDate}`;

        await sendMessage(message.chat.id, formattedResponse);
    } else {
        await sendMessage(message.chat.id, `I don't know what you mean`);
    }

    return {
        statusCode: 200
    };
};