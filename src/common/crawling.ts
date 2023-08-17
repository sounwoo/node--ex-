import axios from 'axios';
import cheerio from 'cheerio';

const crawiling = async () => {
    const result = await axios.get(
        'https://allforyoung.com/posts/contest',
    );
    console.log(result.data);
    const $ = cheerio.load(result.data);

    $('div').each((_, el) => {
        console.log($(el));
    });
    //#__next > div > div > section:nth-child(2) > div.list-layout__Grid-sc-1ll7kdd-6.dnWnpw > div:nth-child(1)
};

crawiling();
