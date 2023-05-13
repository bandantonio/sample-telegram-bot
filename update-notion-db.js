const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DB_ID;

module.exports = async (days) => {
    await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
            Status: {
                title: [{ text: { content: days } }]
            },
        },
    });
  return days;
}