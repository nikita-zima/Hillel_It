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
    return new Unit(this.type,this.health,this.maxHealth,this.maxDistance);
};

function Army(defaultUnits) {
    this.units=[];
    if (defaultUnits) {
        this.combineUnits(defaultUnits);
    }
}

Army.prototype.isReadyToMove=function (distance){
    for(const unit of this.units){
        if(unit.isReadyToMove(distance)===false){
            return false;
        }
    }
    return true;
};

Army.prototype.isReadyToFight=function(){
    for(const unit of this.units){
        if(unit.isReadyToFight()===false){
            return false;
        }
    }
    return true;
};

Army.prototype.restore=function(){
    this.units.forEach(unit=>{
        unit.restore();
    })
};

Army.prototype.getReadyToMoveUnits=function(distance){
    return this.units.filter(unit=>unit.isReadyToMove(distance)===true);
};

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
const arrow=new Unit("arrow",100,100, 2000);
defaultUnits.push(arrow);
const sword=new Unit("sword",30,100,1000);
defaultUnits.push(sword);
const support=new Unit("support",120,200,300);
defaultUnits.push(support);

// const army=new Army(defaultUnits);
// const r=army.isReadyToFight();
// console.log(r);
// const r1=army.isReadyToMove(350);
// console.log(r1);
// console.log(army);
// const move=army.getReadyToMoveUnits(1500);
// console.log(move);
// const fight=army.getReadyToFightUnits();
// console.log(fight);

