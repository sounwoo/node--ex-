import axios from 'axios';
import cheerio from 'cheerio';

// axios로 크롤링시 정적 페이지 에서만 가능 동적 페이지에서는 불가
const crawiling = async () => {
    // const result = await axios.get(
    //     'https://api.allforyoung.com/api/v1/posts/?category=activity&order=publish&page=1&page_size=24',
    // );
    // console.log(result.data.data.results);
    // console.log(547 / 24);

    // rest-api 사용하는 경우는 경로를 직접 입력하면 문제를 해결할 수 있을것 같음
    // graphql일때는 어떻게?? Qurey를 보낼것인가?

    const result = await axios.get(
        'https://linkareer.com/list/activity',
    );

    const $ = cheerio.load(result.data);

    const qqq = $('body ').html();
    console.log(qqq);

    // #__next > div > div > section:nth-child(2) > div.list-layout__Grid-sc-1ll7kdd-6.dnWnpw
    // console.log(qqq);
};

crawiling();
