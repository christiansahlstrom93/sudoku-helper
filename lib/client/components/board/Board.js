import React, { useEffect, useState } from 'react';
import API from '../../api';
import { Row } from './row/Row';
import styles from './styles'

const initialData = [
    [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    ],
    [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    ],
    [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    ],
];

export const Board = () => {
    const [values, setValues] = useState();
    useEffect(() => {
        if (!values) {
            initValues();
        }
    }, [values]);

    const initValues = () => {
        setValues(initialData);
    };

    const calculate = async () => {
        const correctedSuduko = await API.post('/calculate', { data: values.flat(1) });
        console.log(correctedSuduko)
        setValues(correctedSuduko);
    };

    const updateValues = data => {
        setValues(prevRows => {
            return prevRows.map((row, rowIndex) => {
                if (rowIndex === data.rowIndex) {
                    return row.map((column, columnIndex) => {
                        if (columnIndex === data.columnIndex) {
                            return column.map((tuple, idx) => idx === data.boxIndex ? data.value: tuple);
                        }
                        return column;
                    });
                }
                return row;
            });
        });
    };

    if (!values) {
        return null;
    }

    return (
        <div style={styles.container}>
            {values.map((rows, rowIndex) => {
                return (<div key={rowIndex} style={styles.grid}>
                    {rows.map((row, columnIndex) => (
                        <div key={columnIndex} style={styles.gridContainer}>
                            <Row
                                updateValues={updateValues}
                                row={row}
                                boardRow={rowIndex}
                                boardColumn={columnIndex}
                            />
                        </div>
                    ))}
                </div>)
            })}
            <button onClick={() => calculate()}>Submit</button>
        </div>
    )
};
