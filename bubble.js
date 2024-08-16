function bubbleSort(inputArr) {
    let i = inputArr.length - 1;
    let temp;

    while (i > 0) {
        for (let j = 0; j <= i - 1; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                temp = inputArr[j + 1];
                inputArr[j + 1] = inputArr[j];
                inputArr[j] = temp;
            }
        }
        i--;
    }

    return inputArr;
}

module.exports = bubbleSort;