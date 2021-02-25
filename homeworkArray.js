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
function some(numbers,callback){
    let counter=0;
    for(let i=0;i<numbers.length;i++){
        if(callback(numbers[i])===true){
            counter++;
        }
    }
    return counter>0;
}
function every(numbers,callback){
    let counter=0;
    for(let i=0;i<numbers.length;i++){
        if(callback(numbers[i])===true){
            counter++;
        }
    }
    return counter===numbers.length;
}
