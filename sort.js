function sort1(arr) {
    const size = arr.length;
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let value = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = value;
            }
        }
    }
    return arr;
}

function sort2(arr) {
    const size = arr.length;
    for (let i = 0; i < size - 1; i++) {
        let min = i;
        for (let j = i + 1; j < size; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        let value = arr[min];
        arr[min] = arr[i];
        arr[i] = value;
    }
    return arr;
}

const array = [1, 2, -4, 8, -11, 2, -7, -6, 8, 12];

console.log(sort1(array));
console.log(sort2(array));