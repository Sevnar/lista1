function bubblesort(data) {
    let len = data.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                let aux = data[j];
                data[j] = data[j + 1];
                data[j + 1] = aux;
            }
        }
    }
    return data;
}

module.exports = bubblesort;