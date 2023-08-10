import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('ads');
    res.send('hello');
});

app.listen(3000, () => {
    console.log('백엔드 오픈입니다.');
});
