import React from 'react';
import styles from './styles'

export const Box = (props) => (
    <input
        type="number"
        min="0"
        max="9"
        style={styles.input}
        value={props.value}
        onChange={e => props.onValueChange({ value: e.target.value, rowIndex: props.rowIndex, columnIndex: props.columnIndex })}
    />
);