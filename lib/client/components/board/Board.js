import React, { useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { addNumber, calculate } from '../../actions/sudukoActions';
import { Box } from './box/Box';
import styles from './styles';

const getSudoku = createSelector(state => state.sudoku, sudoku => sudoku);
const getIsFetching = createSelector(state => state.fetching, fetching => fetching);
const getHasErrors = createSelector(state => state.error, error => error);

export const Board = () => {
    const sudoku = useSelector(getSudoku, shallowEqual);
    const isFetching = useSelector(getIsFetching, shallowEqual);
    const hasErrors = useSelector(getHasErrors, shallowEqual);
    const dispatch = useDispatch();
    const [mouseHover, setMouseHover] = useState(false);

    const getSeparator = (index, style) => {
        if (index % 3 === 0) {
            return <div style={style}></div>
        }
        return null;
    };

    const getStatusMessage = () => {
        if (isFetching) {
        return <div style={styles.loadingText}>Calculating, please wait...</div>
        } else if (hasErrors) {
            return <div style={styles.errorText}>Something went wrong, please try again or change the numbers</div>
        }

        return null;
    };

    return (
        <div style={styles.board}>
            <div style={styles.container}>
                {sudoku.map((row, idx) => (
                    <div key={idx} className="separator">
                        {getSeparator(idx, { paddingBottom: '8px' })}
                        <div className="row" style={styles.row}>
                            {row.map((boxValue, index) => (
                                <React.Fragment key={index}>
                                    {getSeparator(index, { paddingRight: '8px' })}
                                    <div style={styles.box}>
                                        <Box
                                            value={boxValue}
                                            rowIndex={idx}
                                            columnIndex={index}
                                            onValueChange={data => dispatch(addNumber(data))}
                                        />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {getStatusMessage()}
            <div style={styles.buttonContainer}>
                <button
                    disabled={isFetching}
                    style={mouseHover ? styles.buttonHover : styles.button}
                    onClick={() => calculate(dispatch, sudoku)}
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => setMouseHover(false)}
                >
                    Calculate
                </button>
            </div>
        </div>
    )
};
