import React, { useEffect } from 'react';
import styles from './styles'
import { Box } from 'components/board/box/Box'

export const Row = (props) => {
    const onValueChange = data => {
        props.updateValues({
            rowIndex: props.boardRow,
            columnIndex: props.boardColumn,
            boxIndex: data.index,
            value: Number(data.value)
        });
    };
    return (
        <div style={styles.grid}>
            {props.row.map((data, idx) => (
                <div style={styles.box} key={idx}>
                    <Box value={data} index={idx} onValueChange={onValueChange} />
                </div>
            ))}
        </div>
    );
};