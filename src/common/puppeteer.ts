import pupperteer from 'puppeteer';
import cheerio from 'cheerio';

const pup = async () => {
    const brower = await pupperteer.launch({
        headless: false,
        args: ['--start-fullscreen'],
    });

    const page = await brower.newPage();

    await page.setViewport({
        width: 1200,
        height: 800,
    });

    await Promise.all([
        page.goto('https://linkareer.com/list/activity'),
        page.waitForNavigation(),
    ]);
    page.click(
        '#__next > div.PageLayout__StyledWrapper-sc-c04bdb4b-0.hmuBvr > div.MuiContainer-root.jss656.jss654 > div.MuiBox-root.jss712.jss652 > div > div.MuiBox-root.jss726.jss719 > div.MuiGrid-root.jss714.MuiGrid-container.MuiGrid-spacing-xs-4.jss717 > div:nth-child(1)',
    );

    const content = await page.content();
    const $ = cheerio.load(content);
    const data = $('#__next ').html();
    console.log(data);
    // data.map((_, el) => {
    //     console.log($(el));
    // });

    // brower.close();
};
pup();
