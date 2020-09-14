import express from 'express';
import config from './config';
import serverRenderer from './serverRenderer';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { component: serverRenderer() });
});

app.listen(config.port, () => {
    console.info(`App is listenig to ${config.port}`);
});

