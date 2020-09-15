import React, { useEffect, useState } from 'react';
import API from '../../api';
import { Box } from './box/Box';
import styles from './styles';

//TODO: Fixa rendering!!!!

const initialData = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
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
        const correctedSuduko = await API.post('/calculate', { data: values });
        console.log(correctedSuduko)
        setValues(correctedSuduko);
    };

    const updateValues = data => {
        setValues(prevRows => {
            return prevRows.map((row, rowIndex) => {
                if (rowIndex === data.rowIndex) {
                    return row.map((box, idx) => idx === data.columnIndex ? data.value : box);
                }
                return row;
            });
        });
    };

    if (!values) {
        return null;
    }

    return (
        <div style={styles.board}>
            <div style={styles.container}>
                {values.map((row, idx) => (
                    <div key={idx} className="row" style={styles.row}>
                        {row.map((boxValue, index) => (
                            <div key={index} style={styles.box}>
                                <Box
                                    value={boxValue}
                                    rowIndex={idx}
                                    columnIndex={index}
                                    onValueChange={updateValues}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button style={styles.button} onClick={() => calculate()}>Submit</button>
        </div>
    )
};
