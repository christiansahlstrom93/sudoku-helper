'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _calculationService = require('../services/calculationService');

var _calculationService2 = _interopRequireDefault(_calculationService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var mock = [[[0, 9, 0, 0, 0, 0, 8, 5, 3], [0, 0, 0, 8, 0, 0, 0, 0, 4], [0, 0, 8, 2, 0, 3, 0, 6, 9]], [[5, 7, 4, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 9, 0, 0, 6, 3, 7]], [[9, 4, 0, 1, 0, 8, 5, 0, 0], [7, 0, 0, 0, 0, 6, 0, 0, 0], [6, 8, 2, 0, 0, 0, 0, 9, 0]]];

router.get('/calculate', function (req, res) {
    var calculationService = new _calculationService2.default();
    var mocked = mock.flat(1);
    res.send({ data: calculationService.getCalculatedSuduko(mocked) }).status(200);
});

router.post('/calculate', function (req, res) {
    var calculationService = new _calculationService2.default();
    res.send({ data: calculationService.getCalculatedSuduko(req.body.data) }).status(200);
});

exports.default = router;