import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: 'http://elasticsearch:9200',
});

async function bootstrap() {
    try {
        await client.ping();
        console.log('elasticseach 연결');
    } catch (e) {
        console.log(e);
    }
}
bootstrap();

export default client;
