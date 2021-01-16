// The task was given from the training platform "checkio", and this is my solution.

// You are given a matrix of NxN (4≤N≤10). You should check if there is a sequence of 4 or more matching digits.
// The sequence may be positioned horizontally, vertically or diagonally (NW-SE or NE-SW diagonals).
// Input: A matrix as a list of lists with integers.
// Output: Whether or not a sequence exists as a boolean.

function findSequence(values) {
    const reg = /(.)\1{3,}/;
    let str = '';
    let diagVar = 0;

    // Horizontal checking
    for (let i = 0; i < values.length; i++) {
        if (reg.test(values[i].join(''))) return true;
    }

    // Vertical cheking
    for (let i = 0; i < values[0].length; i++) {
        str = '';
        for (let j = 0; j < values.length; j++) {
            str += values[j][i];
        }
        if (reg.test(str)) return true;
    }

    // Diagonal checking
    // from left-top to rigth-bottom
    for (let i = 3; i < values.length; i++) {
        str = '';
        diagVar = 0;
        for (let j = i; j >= 0; j--) {
            str += values[diagVar][j];
            diagVar++;
        }
        if (reg.test(str)) return true;
    }

    for (let i = values.length - 4; i > 0; i--) {
        str = '';
        diagVar = values.length - 1;
        for (let j = i; j < values.length; j++) {
            str += values[j][diagVar];
            diagVar--;
        }
        if (reg.test(str)) return true;
    }

    // from left-bottom to rigth-top
    for (let i = values.length - 4; i >= 0; i--) {
        str = '';
        diagVar = i;
        for (let j = 0; j < values.length - i; j++) {
            str += values[j][diagVar];
            diagVar++;
        }
        if (reg.test(str)) return true;
    }

    for (let i = values.length - 4; i > 0; i--) {
        str = '';
        diagVar = 0;
        for (let j = i; j < values.length; j++) {
            str += values[j][diagVar];
            diagVar++;
        }
        if (reg.test(str)) return true;
    }
    return false;
}

findSequence([
    [1, 2, 1, 1],
    [1, 1, 4, 1],
    [1, 3, 1, 6],
    [1, 7, 2, 5]
]);

findSequence([
    [7, 1, 4, 1],
    [1, 2, 5, 2],
    [3, 4, 1, 3],
    [1, 1, 8, 1]
]);

findSequence([
    [2, 1, 1, 6, 1],
    [1, 3, 2, 1, 1],
    [4, 1, 1, 3, 1],
    [5, 5, 5, 5, 5],
    [1, 1, 3, 1, 1]
]);

findSequence([
    [7, 1, 1, 8, 1, 1],
    [1, 1, 7, 3, 1, 5],
    [2, 3, 1, 2, 5, 1],
    [1, 1, 1, 5, 1, 4],
    [4, 6, 5, 1, 3, 1],
    [1, 1, 9, 1, 2, 1]
]);

findSequence([
    [2, 6, 2, 2, 7, 6, 5],
    [3, 4, 8, 7, 7, 3, 6],
    [6, 7, 3, 1, 2, 4, 1],
    [2, 5, 7, 6, 3, 2, 2],
    [3, 4, 3, 2, 7, 5, 6],
    [8, 4, 6, 5, 2, 9, 7],
    [5, 8, 3, 1, 3, 7, 8]
]);

findSequence([
    [1, 7, 6, 1, 8, 5, 1],
    [7, 9, 1, 7, 2, 8, 6],
    [5, 1, 4, 5, 8, 8, 3],
    [8, 6, 3, 9, 7, 6, 9],
    [9, 8, 9, 8, 6, 8, 2],
    [1, 7, 2, 4, 9, 3, 8],
    [9, 9, 8, 6, 9, 2, 6]
]);

findSequence([
    [6, 9, 1, 1, 6, 2],
    [5, 9, 7, 8, 2, 5],
    [2, 1, 1, 7, 9, 8],
    [1, 8, 1, 4, 7, 4],
    [7, 8, 5, 4, 5, 1],
    [6, 4, 8, 8, 1, 8]
]);

findSequence([
    [2, 7, 6, 2, 1, 5, 2, 8, 4, 4],
    [8, 7, 5, 8, 9, 2, 8, 9, 5, 5],
    [5, 7, 7, 7, 4, 1, 1, 2, 6, 8],
    [4, 6, 6, 3, 2, 7, 6, 6, 5, 1],
    [2, 6, 6, 9, 8, 5, 5, 6, 7, 7],
    [9, 4, 1, 9, 1, 3, 7, 2, 3, 1],
    [5, 1, 4, 3, 6, 5, 9, 3, 4, 1],
    [6, 5, 5, 1, 7, 7, 8, 2, 1, 1],
    [9, 5, 7, 8, 2, 9, 2, 6, 9, 3],
    [8, 2, 5, 7, 3, 7, 3, 8, 6, 2]
]);

findSequence([
    [1, 9, 7, 8, 9, 3, 6, 5, 6, 2],
    [4, 9, 4, 8, 3, 4, 8, 8, 5, 9],
    [2, 8, 5, 5, 7, 8, 6, 1, 3, 6],
    [6, 4, 7, 6, 9, 1, 4, 5, 7, 8],
    [4, 7, 7, 9, 8, 8, 8, 8, 4, 4],
    [3, 7, 3, 2, 1, 9, 1, 8, 9, 1],
    [4, 7, 2, 4, 8, 1, 2, 3, 6, 2],
    [4, 4, 1, 3, 3, 3, 9, 2, 6, 7],
    [8, 6, 1, 9, 3, 5, 8, 1, 7, 5],
    [7, 3, 6, 5, 3, 6, 6, 4, 8, 2]
]);

findSequence([
    [1, 6, 1, 7],
    [4, 7, 3, 6],
    [3, 5, 7, 9],
    [8, 6, 6, 9]]);

findSequence([
    [1, 2, 4, 6, 3],
    [2, 5, 2, 6, 3],
    [8, 7, 5, 9, 5],
    [2, 1, 1, 4, 3],
    [4, 2, 7, 5, 1]
]);

findSequence([
    [2, 3, 6, 5, 6, 2, 8, 3, 7, 4],
    [6, 9, 5, 9, 7, 6, 8, 5, 1, 6],
    [6, 8, 2, 6, 1, 9, 3, 6, 6, 4],
    [5, 8, 3, 2, 3, 8, 7, 4, 6, 4],
    [2, 3, 1, 4, 5, 1, 2, 5, 6, 9],
    [5, 4, 8, 7, 5, 5, 8, 4, 9, 5],
    [9, 7, 9, 9, 5, 9, 9, 8, 1, 2],
    [5, 1, 7, 4, 8, 3, 4, 1, 8, 8],
    [5, 3, 3, 2, 6, 1, 4, 3, 8, 8],
    [4, 8, 1, 4, 5, 8, 8, 7, 4, 7]
]);

findSequence([
    [7, 7, 4, 4, 8],
    [7, 4, 5, 5, 6],
    [6, 6, 5, 2, 8],
    [6, 2, 3, 8, 4],
    [6, 1, 3, 1, 2]
]);

findSequence([
    [7, 9, 1, 7, 6, 7, 5, 9, 6],
    [5, 5, 9, 3, 1, 6, 7, 4, 7],
    [1, 7, 5, 2, 3, 1, 6, 4, 7],
    [2, 2, 2, 8, 7, 2, 6, 6, 9],
    [5, 6, 4, 2, 6, 7, 3, 4, 7],
    [5, 5, 6, 4, 9, 4, 3, 1, 7],
    [7, 3, 2, 3, 2, 4, 4, 7, 3],
    [3, 6, 9, 7, 2, 5, 6, 2, 5],
    [4, 1, 3, 9, 4, 2, 4, 8, 4]
]);