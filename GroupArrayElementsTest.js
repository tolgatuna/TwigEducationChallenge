const assert = require('assert');
const groupArrayElements = require('./GroupArrayElements');


const groupedArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let outIndex = 0; outIndex < arr1.length; outIndex++) {
        if (arr1[outIndex].length !== arr2[outIndex].length) {
            return false;
        }
        for (let innerIndex = 0; innerIndex < arr1[outIndex].length; innerIndex++) {
            if (arr1[outIndex][innerIndex] !== arr2[outIndex][innerIndex]) {
                return false;
            }
        }
    }
    return true;
};

const test1 = groupArrayElements([1, 2, 3, 4, 5], 3);
assert.ok(groupedArrayEqual(test1, [[1, 2], [3, 4], [5]]), 'Arrays are not equal');

const test2 = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
assert.ok(groupedArrayEqual(test2, [[1, 2], [3, 4], [5, 6]]), 'Arrays are not equal');

const test3 = groupArrayElements([1, 2, 3, 4, 5, 6], 2);
assert.ok(groupedArrayEqual(test3, [[1, 2, 3], [4, 5, 6]]), 'Arrays are not equal');

const test4 = groupArrayElements([1, 2, 3, 4, 5, 6], 1);
assert.ok(groupedArrayEqual(test4, [1, 2, 3, 4, 5, 6]), 'Arrays are not equal');

const test5 = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3);
assert.ok(groupedArrayEqual(test5, [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]), 'Arrays are not equal');

console.log('Tests are passed!'); // that message can not be displayed if any error is thrown by any assert.ok