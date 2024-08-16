function insertionSort(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        let currValue = inputArr[i];

        for (var j = i - 1; j > -1 && inputArr[j] > currValue; j--) {
            inputArr[j + 1] = inputArr[j];
        }

        inputArr[j + 1] = currValue;
    }

    return inputArr;
}

module.exports = insertionSort;