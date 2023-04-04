module.exports = (text) => {
    // /echo
    // /echo Hello world
    // get command - grab everything between the / and either the end of the string, a space, or an @.
    const commandMatch = text.match(/(?<=\/).*?(?=$| |@)/);
    const command = commandMatch ? commandMatch[0] : null;

    // /echo@botName
    // /echo@botName Hello world
    // get botname - grab everything between @ and either the end of the line or a space.
    const botNameMatch = text.match(/(?<=@).*?(?=($| ))/);
    const botName = botNameMatch ? botNameMatch[0] : null;

    // get extra arguments - grab everything between the first space and the end of the line.
    const extraMatch = text.match(/(?<=\s).*?(?=$)/);
    const extra = extraMatch ? extraMatch[0] : null;

    return {
        command,
        botName,
        extra
    };
}