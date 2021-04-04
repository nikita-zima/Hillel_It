const animal={
    name: this.name,
    walk: function (){
        console.log(`${this.name} is walking`);
    },
    jump: function (){
        console.log(`${this.name} is jumping`);
    }
}
const mammal= {
    gender: this.gender,
    milk: function () {
        if (this.gender === "female") {
            console.log(`${this.gender} ${this.name} gives milk`)
        }
    },
    __proto__: animal
}
const racoon={
    name: "racoon",
    gender: "female",
    stealing: function (){
        console.log(`${this.name} is stealing`)
    },
    __proto__: mammal
}

racoon.walk();
racoon.jump();
racoon.milk();
racoon.stealing();
