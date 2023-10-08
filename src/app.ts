import express from 'express';
import cors from 'cors';
import { Controllers } from './apis';
import swaggerFile from './common/swagger-output.json';
import swaggerUi from 'swagger-ui-express';

const app = express();
//Swagger

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, { explorer: true }),
);

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
