const puppeteer = require("puppeteer-core");
const chromium = require('@sparticuz/chromium');

let daysString = '';
exports.checkStackOverflow = async () => {
    const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath("/var/task/node_modules/@sparticuz/chromium/bin"),
        headless: chromium.headless,
    });
    const page = await browser.newPage();
    await page.goto('https://stackoverflow.com/users/login');
    await page.click('.js-reject-cookies');
    await page.type('#email', process.env.SO_USER);
    await page.type('#password', process.env.SO_PASS);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.goto(`https://stackoverflow.com/users/${process.env.SO_USER_ID}`);

    daysString = await page.$eval('#js-daily-access-calendar-container > button > div:nth-child(2)', el => el.textContent);

    await browser.close();

    return daysString;
}