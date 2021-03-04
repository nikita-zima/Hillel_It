function deepCopy(obj){
    if(isPrimitive(obj)) {
        return obj
    } else if (Array.isArray(obj)) {
        return obj.map((val) => {
            return deepCopy(val)
        })
    } else if (isObject(obj)) {
        let res = {}
        for (let key in obj) {
            res[key] = deepCopy(obj[key])
        }
        return res
    }
}
function isPrimitive(obj){
    return typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean";
}
function isObject(obj){
    return obj!==Array.isArray(obj)||obj!==null&&typeof obj==="object";
}
const getAdder = function () {
    let res = 0;
    return function(x) {
        res += x;
        return res;
    }
};
const sum=getAdder();
console.log(sum(3))
console.log(sum(3))
console.log(sum(3))
console.log(sum(23))