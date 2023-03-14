function isEqualObj(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let per in obj1) {
        if(obj2.hasOwnProperty(per)) {
            if (obj1[per] !== obj2[per]) {
                return false;
            }
        } else {
            return false
        }
    }
    return true;
}

let obj1 = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    "+1": "США"
};  

let obj2 = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+1": "США"
};

console.log(isEqualObj(obj1, obj2));
