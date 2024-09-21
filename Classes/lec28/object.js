// OBJECT can be declared in 2 ways: constructor/ literals

// A : contructor:

const obj = new Object();
obj.name = "vinayak";
console.log(obj);
console.log(typeof obj);


// B : literals:

const users = {
    name: 'vinayak',
    "full name": 'vinayak dhar',
    age: 25,
    subject: 'fee',
    cgpa: 8.9
}
console.log(users);

// 1. access object value:
console.log(users.age);
// console.log(users.full name); cannot access full name through this method

// prefrrable
console.log(users['age']);
console.log(users['full name']);
// console.log(users('full name')); it will consider users as function
console.log(typeof users);

// 2. chandign/updating object value:
console.log(users.name);

users.name = 'Mohit';
console.log(users.name);

// 3. object inside a object:
const Musers = {
    user1: {
        name: 'vinayak',
        age: 19
    },
    user2: {
        name: {
            name: 'vela bnda',
            age: 300
        },
        age: 18
    },
    user3: {
        name: 'varun',
        age: 18
    }
}
console.log(Musers.user3.name);
console.log(Musers.user2.name.name);

// 4. object inside a array:
let arr = [
    {
        name: 'vinayak',
        age: 19
    },
    {
        name: 'mera beta yashasvi',
        age: 18
    }, 
    {
        name: 'meri beti varun',
        age: 18
    }
]
console.log(arr[1].name);
console.log(arr[0].age);

// 5. merging 2 objects
let obj1 = {name1: 'vinayak', age: 19};
let obj2 = {name2: 'kirmada', age: 250};
// spread operators
let obj3 = {...obj1,...obj2};
console.log(obj3);

// or 

let obj4 = Object.assign(obj1, obj2);
console.log(obj4);
