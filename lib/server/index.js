import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import api from './api'
import { renderIndex } from './serverRenderer';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

app.get('/', (req, res) => {
    res.render('index', { component: renderIndex() });
});

app.listen(config.port, () => {
    console.info(`App is listening on port: ${config.port}`);
});

