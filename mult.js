const prompt = require("prompt-sync")()
const num = Number(prompt("enter a number of your choice "))
for (let i = 1; i <= 12; i++) {
    let ans = i * num;
    console.log(`${num} X ${i} = ${ans}`);
}


class Person {
    constructor (name) {
        this.name = name
        
    }
}

let name;

let person = new Person("sanni")
let person1 = new Person("dennis")

console.log(person, person1);


class reverseAnyName {
    constructor (num1, num2) {
        this.num1 = num1;
        this.num2 = num2
    }

    static dsum() {
        return this.num1 + this.num2
    }

}


let cal = new reverseAnyName(1, 2)

// console.log(cal.dsum());
console.log(cal.num1 + cal.num2);


