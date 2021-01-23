function insertionsort(data) {
    let len = data.length;

    for (let i = 1; i < len; i++) {
        let j = i - 1;
        let cur = data[i];

        while ((j > -1) && (cur < data[j])) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = cur;
    }
    return data;
}

module.exports = insertionsort;