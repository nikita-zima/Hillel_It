function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove=function (distance){
    return this.maxDistance>=distance;
}

Unit.prototype.isReadyToFight=function (){
    return this.health>=this.maxHealth/2;
};

Unit.prototype.restore=function (){
    if(this.health<this.maxHealth){
        this.health=this.maxHealth;
    }
};

Unit.prototype.clone=function (){
    return copy=new Unit(this.type,this.health,this.maxHealth,this.maxDistance);
};

function Army(defaultUnits) {
    this.units=[];
    if (defaultUnits) {
        this.combineUnits(defaultUnits);
    }
}

Army.prototype.isReadyToMove=function (distance){
    this.units.forEach(unit=>{
        return unit.isReadyToMove(distance) !== true;
    })
};

Army.prototype.isReadyToFight=function(){
    this.units.forEach(unit=>{
      return unit.isReadyToFight() !== true;
    })
};

Army.prototype.restore=function(){
    this.units.forEach(unit=>{
        unit.restore();
    })
};

Army.prototype.getReadyToMoveUnits=function(distance){
    const ready=[];
    this.units.forEach(unit=>{
        if(unit.isReadyToMove(distance)){
            ready.push(unit);
        }
    })
    return ready;
};

// Army.prototype.getReadyToFightUnits=function(){
//     const ready=[];
//     this.units.forEach(unit=>{
//         if(unit.isReadyToFight()){
//             ready.push(unit);
//         }
//     })
//     return ready;
// };

Army.prototype.combineUnits=function(support){
    support.forEach(unit=>{
        this.units.push(unit)
    })
    console.log(this.units);
};

Army.prototype.cloneUnit=function(index){
    return copy=this.units[index].clone();
};

const defaultUnits=[];
const arrow=new Unit("arrow",100,100, 1000);
defaultUnits.push(arrow);
const sword=new Unit("sword",30,100,1000);
defaultUnits.push(sword);
const support=new Unit("support",120,200,300);
defaultUnits.push(support);

// const army=new Army(defaultUnits);
// console.log(army);
// const move=army.getReadyToMoveUnits(1000);
// console.log(move);
// const fight=army.getReadyToFightUnits();
// console.log(fight);

