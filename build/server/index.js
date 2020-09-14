'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _serverRenderer = require('./serverRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.set('view engine', 'ejs');
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use('/api', _api2.default);

app.get('/', function (req, res) {
    res.render('index', { component: (0, _serverRenderer.renderIndex)() });
});

app.listen(_config2.default.port, function () {
    console.info('App is listenig to ' + _config2.default.port);
});