const { Client } = require("@notionhq/client");
module.exports = async (days, token, databaseId) => {
    const notion = new Client({ auth: token });
    const trimmedDaysString = days.replace(/^"(.*)"$/, '$1');

    await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
            Status: {
                title: [{ text: { content: trimmedDaysString } }]
            },
        },
    });

    return days;
}