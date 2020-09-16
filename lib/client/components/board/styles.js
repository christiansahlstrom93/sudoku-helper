const styles = {
    board: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    row: {
        display: 'flex',
        width: '100%',
        height: '45px',
    },
    box: {
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid #4CAF50',
        cursor: 'pointer',
        marginTop: '12px',
        padding: '12px',
        width: '160px',
        height: '60px',
        fontFamily: "'Roboto', 'sans-serif'",
    },
    buttonHover: {
        marginTop: '12px',
        padding: '12px',
        width: '160px',
        height: '60px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        border: '2px solid #4CAF50',
        color: 'white',
        fontFamily: "'Roboto', 'sans-serif'",
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
    },
    loadingText: {
        fontFamily: "'Roboto', 'sans-serif'",
        padding: '8px 8px 0 0',
        color: '#4CAF50',
    },
    errorText: {
        fontFamily: "'Roboto', 'sans-serif'",
        padding: '8px 8px 0 0',
        color: '#d00000',
    }
};

export default styles;