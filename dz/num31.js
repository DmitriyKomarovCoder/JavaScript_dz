function isEqual(val1, val2) {
    if (typeof val1 !== typeof val2) {
        return false;
    }

    if (Array.isArray(val1) && Array.isArray(val2)) {
        if(val1.length !== val2.length) {
            return false;
        }
        for (let i = 0; i < val1.length; i++) {
            if (!isEqual(val1[i], val2[i])) {
                return false;
            }
        }
        return true;
    }

    if (typeof val1 === 'object' && val1 !== null && !Array.isArray(val1)) {
        if (Object.keys(val1).length !== Object.keys(val2).length) {
          return false;
        }
        for (let key in val1) {
            if (!isEqual(val1[key], val2[key])) {
                return false;
            }
        }
        return true;
    }

    return val1 === val2;
}

const value1 = { a: 1, b: [2, 3, { c: 4 }], d: '5' };
const value2 = { b: [2, 3, { c: 4 }], a: 1, d: '5' };
console.log(isEqual(value1, value2)); // true

const value3 = [1, { a: 2 }, [3, 4]];
const value4 = [1, { a: 2 }, [3, 4]];
console.log(isEqual(value3, value4)); // true

const value5 = { a: 1, b: [2, 3], c: { d: 4 } };
const value6 = { a: 1, b: [2, 3], c: { d: 5 } };
console.log(isEqual(value5, value6)); // false
