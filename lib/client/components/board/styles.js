const styles = {
    board: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
    },
    box: {
        border: '1px solid black',
        padding: '18px'
    },
    button: {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid #4CAF50',
        cursor: 'pointer',
        marginTop: '12px',
        padding: '12px',
        width: '160px',
        height: '60px'
    },
    buttonHover: {
        marginTop: '12px',
        padding: '12px',
        width: '160px',
        height: '60px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        border: '2px solid #4CAF50',
        color: 'white'
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
    },
    loadingText: {
        padding: '8px 8px 0 0',
        color: '#4CAF50',
    },
    errorText: {
        padding: '8px 8px 0 0',
        color: '#d00000',
    }
};

export default styles;