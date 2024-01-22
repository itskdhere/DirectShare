import path from 'path';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const server = express();
const port = process.env?.PORT || 3000;
const appDomain = process.env?.APP_DOMAIN;

if (process.env?.ENV?.toLocaleLowerCase() === 'dev') {
    server.use(cors({
        origin: [`http://localhost:${port}`, `http://127.0.0.1:${port}`]
    }));

    console.log(chalk.bgYellowBright('Development Mode Enabled'));

} else if (process.env?.ENV?.toLocaleLowerCase() === 'prod') {
    server.use(cors({
        origin: appDomain
    }));

    console.log(chalk.bgGreenBright('Production Mode Enabled'));
}

server.use(express.static('dist'));

server.get('/*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
});

server.listen(port, () => {
    console.log(`${chalk.greenBright('Server Listening On Port')} ${chalk.greenBright.bold(port)}\n${chalk.magentaBright('Visit:')} ${chalk.blue('http://localhost:' + port)}`);
});