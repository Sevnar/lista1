function seletionsort(data) {
    for (let i = 0; i < data.length; i++) {
        let smaller = i;
        
        for (let j = i; j < data.length; j++) {
            if(data[smaller] > data[j] ){
               smaller = j;
            } 
        }

        if(i != smaller){
            let aux = data[i]
            data[i] =  data[smaller]
            data[smaller] = aux;
        }
    }
    return data;
}
module.exports = seletionsort;