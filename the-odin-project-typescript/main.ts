export {}
let message = "Welcome back!";
console.log(message);

let x = 10;
const y = 20;

let sum;

const title = "Codevolution";

let isBeginner: Boolean = true;
let total: number = 0;
let name: string = "Vishwas";
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: Boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22]

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green
console.log(c)

let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas"

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj && typeof obj === "object" && "name" in obj
}
    if (hasName(myVariable)) {
        console.log(myVariable.name)
    }

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;
// when a value is not under your control

let anyType: any;
anyType =  20;
anyType = true;

function add(num1: number, num2: number = 5): number {
    if (num2) {
        return num1 + num2
    } else {
        return num1;
    }
}

interface Person {
    firstName: string;
    lastName?: string;
}

console.log(add(5, 10));
console.log(add(5));

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}


let p: Person = {
    firstName: "Bruce",
};

fullName(p)

class Employee {
    protected employeeName: string;

    constructor(name:  string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("Vishwas")

emp1.greet()


class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks ${this.employeeName}`)
    }
}

let m1 = new Manager("Bruce")
m1.delegateWork()
m1.greet()