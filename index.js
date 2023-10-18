//soloution//
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    for (let key in collection) {
        result.push(callback(collection[key]));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Object.values(collection);
    let i = 0;
    if (!acc) {
        acc = values[0];
        i++;
    }
    for (; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const result = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            result.push(collection[key]);
        }
    }
    return result;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}
