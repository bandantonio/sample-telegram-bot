const puppeteer = require('puppeteer');
module.exports = async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('https://stackoverflow.com/users/login');
    await page.click('.js-reject-cookies');
    await page.type('#email', process.env.SO_USER);
    await page.type('#password', process.env.SO_PASS);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.goto(`https://stackoverflow.com/users/${process.env.SO_USER_ID}`);
    daysString = await page.evaluate(() => document.querySelector('#js-daily-access-calendar-container > button > div:nth-child(2)').textContent);
    await browser.close();


    return daysString;
}