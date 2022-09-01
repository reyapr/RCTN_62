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
console.log(lastUserName, `<=================== lastUserName ==================`);
console.log(name, studentCity, `<=================== get student ==================`);