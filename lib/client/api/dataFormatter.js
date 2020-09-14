class DataFormatter {
    formatSudukoFromAPI(responseRaw) {
        const suduko = [[], [], []];
        responseRaw.data.forEach((box, index) => {
            if (index < 3) {
                suduko[0].push(box);
            } else if (index < 6) {
                suduko[1].push(box);
            } else {
                suduko[2].push(box);
            }
        });
        return suduko;
    }
}

export default new DataFormatter();