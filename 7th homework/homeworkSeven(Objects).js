function isSymbolPresentInString(str,symbol){
    const arr=str.split('');
    for(let value of arr){
        if(value===symbol) {
            return true;
        }
    }
    return false;
}
//console.log(isSymbolPresentInString("bc dfga","a"));
function getSymbolIndex(str,symbol){
  const arr=str.split('');
  for(let i=0;i<arr.length;i++){
      if(arr[i]===symbol){
          return i;
      }
  }
  return -1;
}
//console.log(getSymbolIndex("let`s talk about some different situations","f"));

const Goat={
    name: "Michel",
    surname: "Jordan",
    age: 58,
    isPlaying: false,
    awards: ["MVP","Finals MVP","Championship"]
};
const notGoat={
    name: "Lebron",
    surname: "James",
    age:36,
    isPlaying: true,
    awards: ["MVP","Finals MVP","Champ"]
};
const copyObject={};

function copy(target, origin){
    for(let key in origin){
        target[key]=origin[key];
    }
    return target;
}

//console.log(copy(copyObject,Goat));

function compareObjects(first,second){
    if(Object.keys(first).length!==Object.keys(second).length){
        return false
    }
    for(let key in first){
        if(first.hasOwnProperty(key)!==second.hasOwnProperty(key)){
            return false;
        }
        switch (typeof (first[key])) {
            case "object":
                if(Array.isArray(first[key])===true){
                    if(first[key]===second[key]) {
                        for (let i = 0; i < first[key].length; i++)
                            if (first[key] !== second[key])
                                return false;
                    }
                }
                else {
                    if (!Object.compare(first[key], second[key]))
                        return false;
                    break;
                }
            case 'function':
                if (typeof (second[key]) === 'undefined' || (key !== 'compare' && first[key].toString() !== second[key].toString()))
                    return false;
                break;
            default:
                if (first[key] !== second[key]) return false;
        }
    }
    // Проверка объекта obj2 на дополнительные свойства:
    for (let key in second) {
        if (typeof (first[key]) == 'undefined') return false;
    }
    return true;
}
//console.log(compareObjects(Goat,notGoat));
function informationAboutString(str) {
    const result = {};
    const string = str.split("");
    for (let i = 0; i < string.length; i++) {
        let count = result[string[i]]? result[string[i]] : 0;
        result[string[i]] = count + 1;
    }
    return result;
}
//console.log(informationAboutString("let's talk about javascript"));