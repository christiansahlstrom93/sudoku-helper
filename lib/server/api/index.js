import express from 'express';
import CalculationService from '../services/calculationService';

const router = express.Router();

const mock = [
    [
        [ 0, 9, 0, 0, 0, 0, 8, 5, 3 ],
        [ 0, 0, 0, 8, 0, 0, 0, 0, 4 ],
        [ 0, 0, 8, 2, 0, 3, 0, 6, 9 ],
    ],
    [
        [ 5, 7, 4, 0, 0, 2, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 9, 0, 0, 6, 3, 7],
    ],
    [
        [ 9, 4, 0, 1, 0, 8, 5, 0, 0 ],
        [ 7, 0, 0, 0, 0, 6, 0, 0, 0 ],
        [ 6, 8, 2, 0, 0, 0, 0, 9, 0 ],
    ],
];

router.get('/calculate', (req, res) => {
    const calculationService = new CalculationService();
    const mocked = mock.flat(1);
    res.send({ data: calculationService.getCalculatedSuduko(mocked) }).status(200);
});

router.post('/calculate', (req, res) => {
    const calculationService = new CalculationService();
    res.send({ data: calculationService.getCalculatedSuduko(req.body.data) }).status(200);
});

export default router;