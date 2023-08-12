const swaggerAutogen = require('swagger-autogen')();

const options = {
    info: {
        version: '1.0.0',
        title: 'TEST API Docs',
        description: 'test api 문서입니다',
    },
    servers: [{ url: 'http://localhost:7000' }],
    schemes: ['http'],
    tags: [
        {
            name: 'Users',
            description: 'User관련 API',
        },
    ],
};

const outputFile = './common/swagger-output.json';
const endpointsFiles = ['./src/apis/users/users.controller.ts'];
swaggerAutogen(outputFile, endpointsFiles, options);
