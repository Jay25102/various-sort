function merge(arr1, arr2) {
    let out = [];
    let a = 0;
    let b = 0;

    while ((a < arr1.length) && (b < arr2.length)) {
        if (arr1[a] <= arr2[b]) {
            out.push(arr1[a]);
            a++;
        }
        else {
            out.push(arr2[b]);
            b++;
        }
    }

    while (a < arr1.length) {
        out.push(arr1[a]);
        a++;
    }

    while (b < arr2.length) {
        out.push(arr2[b]);
        b++;
    }

    return out;
}

function mergeSort(inputArr) {
    if (inputArr.length <= 1) return inputArr;
    const mid = Math.floor(inputArr.length / 2);
    const left = mergeSort(inputArr.slice(0, mid));
    const right = mergeSort(inputArr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};