const { Client } = require("@notionhq/client");
const { checkStackOverflow } = require("../../checkStackOverflow");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DB_ID;

exports.handler = async (event) => {

    const days = await checkStackOverflow();
    const { next_run } = JSON.parse(event.body);
    const nextRunDate = new Date(next_run).toLocaleString();

    await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
            Status: {
                title: [
                    {
                        text: {
                            content: days
                        }
                    }
                ]
            },
            Next: {
                rich_text: [
                    {
                        text: {
                            content: nextRunDate
                        }
                    }
                ]
            }
        },
    });

    return {
        statusCode: 200
    };
};