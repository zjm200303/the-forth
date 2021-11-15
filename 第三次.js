let S = { name: "Sally", age: 25, gender: 'female' };

let C = new Object();
C.name = 'Cinammon';
C.age = 30;
C.gender = 'female'

function Rocket() {
    this.name = 'Rocket';
    this.age = 33;
    this.gender = 'female'
}
let R = new Rocket();


function copy(insertObj) {
    let newObj = {};
    for (let i in insertObj) {
        newObj[i] = insertObj[i];
    }
    return newObj;
}

let obj1 = copy(R);
let obj2 = copy(C);
let obj3 = copy(S);


let arr = [];


arr.push(obj1, obj2, obj3);


console.table(arr);