const groupArrayElements = (array, N) => {
    if (N < 2) return array;

    const newArray = [[]]
    let group = 0;
    let interiorIndex = 0;
    let interiorLength = Math.ceil(array.length / N);

    for (let i = 0; i < array.length; i++) {
        if (interiorIndex === interiorLength) {
            interiorIndex = 0;
            group++;
            newArray.push([]);
        }
        newArray[group].push(array[i])
        interiorIndex++;
    }
    return newArray
}

module.exports = groupArrayElements;