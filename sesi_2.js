// object literal
let obj = {}

let student = {
    name: 'John',
    major: 'IT',
    gpa: 3.5,
    'passed class': [
        'Programmer Basic'
    ],
    skill: {
        javascript: 90,
        java: 70,
        go: 80
    }
}
let students = ['John', 'Budi', student, {}]

student.name = 'Udin'
student.height = 175
const skillKey = 'skill'
const listOfKey = ['name', 'major', 'gpa']
student['passed class'].push('Architecting on AWS')
student.skill.flutter = 60

let keyOfStudent = Object.keys(student)


obj[10] = '10'
obj[15] = '15'
obj[1] = '1'


// function
function showMessage(message) {
    console.log(message, `<===================  ==================`);
}

function add(num1, num2) {
    return num1 + num2;
}

// const message = showMessage('Udin')
const result = add(1,2)

const calculate = function(arrOfNum, callback) {
    let res1 = callback(arrOfNum[0], arrOfNum[1])
    let res2 = callback(arrOfNum[2], arrOfNum[3])
    
    return res1 + res2
}

let data = [1,2,3,4]
let calculationResult = calculate(data, add)

let showMessageArrw = (message) => {
    console.log(message, `<=================== message ==================`);
    return message;
}

// const msg = showMessageArrw('Bambang')

const calculateArrw = (arrOfNum, callback) => {
    let res1 = callback(arrOfNum[0], arrOfNum[1])
    let res2 = callback(arrOfNum[2], arrOfNum[3])
    
    return res1 + res2 
}
let calculationRes = calculateArrw(data, add)

const tambah = (a,b) => a + b

// setTimeout(() => {
//     console.log( `<=================== muncul setelah 2 detik ==================`);
// }, 2000)

let arr = [1,2,3,4,5,6,7,8,9]
let obj2 = {name: 'Udin'}
// console.log(Array.isArray(obj2), `<=================== is array ==================`);


const names = ['Udin', 'Sedunia', 'Jkt']
const udin = {
    name: 'Udin', 
    lastName: 'Sedunia', 
    city: 'Jkt'
}
let [_, lastName, city] = names
let {lastName: namaTerakhir, city: kota} = udin

// console.log(lastName, city, `<===================  ==================`);
// console.log(namaTerakhir, kota, `<===================  ==================`);

const getUser = () => ['John', 'Doe', 'Bali']
const [__, lastUserName] = getUser()
const getStudent = () => ({ name:'John',lastName: 'Doe',city: 'Bali' })
const {name, city: studentCity} = getStudent()
// console.log(lastUserName, `<=================== lastUserName ==================`);
// console.log(name, studentCity, `<=================== get student ==================`);

// this.test = 'test'
/**
 * This keyword
 */
// console.log(this, `<=================== this ==================`);
let counter = {
    val: 0,
    increment: function() {
        this.val+=1
    }
}
// console.log(counter, `<=================== counter b4 increment ==================`);
counter.increment()
// console.log(counter, `<=================== after increment ==================`);
function testThis1() {
    console.log(this, `<=================== this trad fn ==================`);
}

const testThis2 = () => {
    console.log(this, `<=================== this arr ==================`);
}

// testThis1()
// testThis2()

function Counter() {
    this.val = 0
    setTimeout(function() {
        this.val++
        console.log(this, `<=================== this ==================`);
    }, 2000)
}

function FixedCounter() {
    this.val = 0
    setTimeout(() => {
        this.val++
        console.log(this, `<=================== this ==================`);
    }, 2000)
}

// const c = new Counter()
// let fC = new FixedCounter()
// console.log(fC, `<===================  ==================`);


/**
 * Higher Order Functions
 */
const nums = [1, 2, 3, 4, 5]
// nums.forEach((n) => {
//     console.log(n+1)
// })
// nums.forEach((n) => {
//     console.log(n*2)
// })

const each = (arr, callback) => {
    for(let i=0; i<arr.length; i++) {
        callback(arr[i])
    }
}

// each(nums, (n) => {
//     console.log(n*2)
// })
let myName = 'Udin Sedunia'

String.prototype.forEach = function(cb) {
    for(let i=0;i<this.length;i++) {
        cb(this[i])
    }
}

// myName.forEach((char) => {
//     console.log(char, 'char')
// })

const myCalculate = (keyword) => {
    switch (keyword) {
        case 'ADD':
            return (num1, num2) => {
                return num1 + num2;
            }
        case 'MINUS': 
            return (num1, num2) => {
                return num1 - num2;
            }
        default:
            break;
    }
}

const addFn = myCalculate('ADD')
const myResult = addFn(1,2)

const myResult2 = myCalculate('MINUS')(1,2)
// console.log(myResult, `<=================== 1 ==================`);
// console.log(myResult2, `<=================== 2 ==================`);

let animals = [
    {name: 'fluffy', species: 'cat'},
    {name: 'carlo', species: 'cat'},
    {name: 'sweety', species: 'fish'},
    {name: 'bruno', species: 'dog'},
]

let names1 = []
for(let i = 0; i < animals.length; i++) {
    names1.push(`${animals[i].name}-${animals[i].species}`)
}

let names2 = animals.map((animal) => `${animal.name}-${animal.species}`)

// console.log(names1, `<=================== names1 ==================`);
// console.log(names2, `<=================== names2 ==================`);

let cats = []
for(let i=0;i<animals.length;i++) {
    if(animals[i].species === 'cat') {
        cats.push(`${animals[i].name}-${animals[i].species}`);
    }
}

let cats2 = animals
    .filter((animal) => animal.species === 'cat')
    .map((cat) => `${cat.name}-${cat.species}`)


// console.log(cats2, `<===================  ==================`);

let orders = [
    {amount: 100},
    {amount: 200},
    {amount: 300},
    {amount: 400},
    {amount: 500},
]

let total = 0
for(let i=0;i<orders.length;i++) {
    total += orders[i].amount
}
console.log(total, `<=================== orders ============`);

let total2 = orders.reduce((prev, currentValue) => {
    console.log('prev: ', prev,' current: ', currentValue);
    return prev + currentValue.amount
}, 0)

let strings = ['U', 'd', 'i', 'n']

let udinName = strings.reduce((prev, currentValue) => {
    return prev + currentValue
},'')

console.log(udinName, `<=================== udinName ==================`);
console.log(total2, `<=================== total2 ==================`);