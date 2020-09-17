import React from 'react';
import styles from './styles'

export const Header = () => (
    <div style={styles.header}>
        <div style={styles.headerText}>
            <a style={styles.link} href="/">Sudoku helper</a>
        </div>
    </div>
);