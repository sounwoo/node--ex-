import express from 'express';
import cors from 'cors';
import { Controllers } from './apis';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

Controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(process.env.PORT, () => {
    console.log('백엔드 오픈입니다.', process.env.PORT);
});
