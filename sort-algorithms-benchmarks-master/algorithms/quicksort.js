function quicksort(data, smaller, bigger) {
    if(smaller < bigger) {
        let pivo = parseInt(data[bigger]);
        let i = smaller - 1;
        for (let j = smaller; j <= bigger - 1; j++) {
            if(data[j] <= pivo){
                let aux = data[j]
                data[j] = data[++i]
                data[i] = aux;
            }   
        }
        let aux = data[bigger]
        data[bigger] = data[i+1]
        data[i+1] = aux;

        quicksort(data, smaller, i)
        quicksort(data, i+2, bigger)

    }
    return data;
}

module.exports = quicksort;