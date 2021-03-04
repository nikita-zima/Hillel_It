const callback=function(arg){
    console.log(arg);
}
function forEach(numbers,callback){
    for(let i=0;i<numbers.length;i++){
        callback(numbers[i]);
    }
}
function map(numbers, callback){
    const result=[];
    for(let i=0;i<numbers.length;i++){
        result.push(callback(numbers[i]));
    }
    return result;
}
const cb=function (arg){
    return arg*2;
};
function filter(numbers,callback){
    const result=[];
    for(let i=0;i<numbers.length;i++){
        if(callback(numbers[i])===true){
            result.push(numbers[i]);
        }
    }
    return result;
}
const cb1=(args)=>args%2===0;
const numbers=[2,4,6,8,23];
function some(numbers,callback){
    for(let i=0;i<numbers.length;i++){
        if(callback(numbers[i])){
            return true;
        }
    }
    return false;
}
function every(numbers,callback){
    for(let i=0;i<numbers.length;i++) {
        if (!callback(numbers[i])) {
            return false;
        }
    }
        return true;
}
