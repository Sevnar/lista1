function mergesort(data) {
    let right, left;

    if (data.length > 1) {
      let middle = Math.floor(data.length / 2);
      left = data.slice(0, middle);
      right = data.slice(middle);
    } else {
      return data;
    }
    return merge(mergesort(right), mergesort(left));
}
  
function merge(right, left) {
    let result = [];
    let R = L = 0;
    while (R < right.length && L < left.length) {
        if (left[L] < right[R]) {
        result.push(left[L]);
        L++;
        } else {
        result.push(right[R]);
        R++;
        }
    }
    L = left.slice(L)
    R = right.slice(R)

    return result.concat(L.concat(R));
}

module.exports = mergesort;