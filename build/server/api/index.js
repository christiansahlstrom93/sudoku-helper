'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _calculationService = require('../services/calculationService');

var _calculationService2 = _interopRequireDefault(_calculationService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

const mock = [[2, 0, 3, 0, 0, 8, 6, 0, 7], [1, 4, 0, 7, 2, 6, 0, 0, 9], [5, 0, 7, 1, 3, 9, 4, 2, 8], [0, 2, 5, 0, 8, 1, 9, 0, 4], [4, 1, 0, 9, 0, 3, 2, 0, 5], [0, 7, 9, 2, 0, 5, 0, 3, 6], [6, 0, 2, 0, 1, 0, 0, 9, 3], [7, 0, 0, 5, 0, 2, 0, 0, 1], [0, 8, 1, 3, 6, 7, 0, 4, 0]];

router.get('/calculate', (req, res) => {
    const calculationService = new _calculationService2.default();
    res.send({ sudoku: calculationService.getCalculatedSuduko(mock) }).status(200);
});

router.post('/calculate', (req, res) => {
    const calculationService = new _calculationService2.default();
    const sudoku = calculationService.getCalculatedSuduko(req.body.data);
    if (sudoku) {
        res.send({ sudoku }).status(200);
    } else {
        res.status(500).send({ error: 'Could not be solved' });
    }
});

exports.default = router;