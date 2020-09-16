import express from 'express';
import CalculationService from '../services/calculationService';

const router = express.Router();

const mock = [
    [2, 0, 3, 0, 0, 8, 6, 0, 7],
    [1, 2, 0, 7, 2, 6, 0, 0, 9],
    [5, 0, 7, 1, 3, 9, 4, 2, 8],
    [0, 2, 5, 0, 8, 1, 9, 0, 4],
    [4, 1, 0, 9, 0, 3, 2, 0, 5],
    [0, 7, 9, 2, 0, 5, 0, 3, 6],
    [6, 0, 2, 0, 1, 0, 0, 9, 3],
    [7, 0, 0, 5, 0, 2, 0, 0, 1],
    [0, 8, 1, 3, 6, 7, 0, 4, 0]
];

router.get('/calculate', (req, res) => {
    const calculationService = new CalculationService();
    calculationService.cleanBoard(mock);
    res.send({ sudoku: calculationService.getCalculatedSuduko(mock) }).status(200);
});

router.post('/calculate', (req, res) => {
    const calculationService = new CalculationService();
    const board = calculationService.cleanBoard(req.body.data);
    const sudoku = calculationService.getCalculatedSuduko(board);
    if (sudoku) {
        res.send({ sudoku }).status(200);
    } else {
        res.status(500).send({ error: 'Could not be solved', board });
    }
});

export default router;



