// variable declaration
let score = 10
score = 90

let studentName = 'Udin'

let isDone = false
isDone = 10

// variable name
let student_name
let lifeCycle
let j2umlah


// data type - number
let angka1 = 10
let angka2 = 20
let angka3 = 30

angka1++
angka1++
// console.log(angka1, `<===================  ==================`);

angka1--
// console.log(angka1, `<===================  ==================`);

// angka3 = angka3 + angka2
angka3 += angka2
// console.log(angka3, `<=================== angka3 ==================`);

// data type - string
let firstName = "Udin"
let lastName = 'Sedunia'

// console.log(firstName, lastName)

// console.log(' <div class="form-group">', `<===================  ==================`);
// console.log('He\'s good')
// console.log(lastName.length, `<=================== last name length = ${lastName.length}=================`);
// console.log(lastName[lastName.length - 1], `<=================== last name`)
// lastName[1] = 'b'
// console.log(lastName, `<=================== lastName ==================`);

// console.log('H' + '8', `<=================== string + string ==================`);
// console.log('H' + 8, `<=================== string + number ==================`);
// console.log(typeof (8 + ''), `<=================== number + string ==================`);
// console.log(typeof ('' + true), `<=================== string + boolean ==================`);
// console.log(firstName + " " + lastName, `<=================== full Name ==================`);

// firstName += ' ' + lastName;
// console.log('udin', 'sedunia', `<=================== name ==================`);

let fullName = `${firstName}_${lastName} ${lastName}`
fullName += ` ${firstName}_${lastName}_${lastName}`;


// data type - boolean
let isValid = 'false'
let num1 = 10

// console.log(num1 === '10', `<=================== isValid ==================`);


// array
let student1 = 'udin'
let student2 = 'sedunia'
let student3 = 'bambang'
let student4 = 'jinji'
let student5 = 'budi'

let students = new Array('udin', 'sedunia', 'bambang', 'jinji', 'budi')
let arr = new Array(10)
let listOfString = new Array('Foo', 'test')

let listOfStudent = ['udin', 'sedunia', 'bambang', 'jinji', 'budi']

listOfStudent.push('ujang')
listOfStudent.unshift('rudi')
listOfStudent.shift()

listOfStudent[listOfStudent.length - 1] = 'rudi'


let fruits1 = ['mango', 'apple', 'pear']
let fruits2 = ['papaya', 'guava']
let fruits3 = ['strawberry', 'pineapple']

fruits1.push.apply(fruits3, fruits2)

let fruits = [...fruits1, ...fruits2]
let mergedArray = [fruits1, fruits2]
// console.log(mergedArray, `<===================  ==================`);
// console.log(fruits, `<===================  ==================`);


let arrNums = [1,2,3,4,5,6,7]

// console.log(arrNums.slice(2), `<=================== slice i=2 ==================`);
// console.log(arrNums.slice(2, 4), `<=================== slice i=2-4 ==================`);
// console.log(arrNums.slice(-3), `<===================  ==================`);
// console.log(arrNums.slice(1, -1), `<===================  ==================`);

// console.log(arrNums, `<=================== arrNums ==================`);

let arrNums2 = [1,2,3,4,5,6,7]

// console.log(arrNums.splice(2), `<===================  ==================`);
// console.log(arrNums.splice(2, 2), `<===================  ==================`);

// console.log(arrNums, `<===================  ==================`);

let months = ['Jan', 'Mar', 'Apr', 'Jun', 'Jul'];

months.splice(1, 0, 'Feb')
months.splice(2, 2, 'Mar', 'April', 'May')
months = 1

console.log(months, `<===================  ==================`);

// multidedimensional array

let arrMult = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arrMult, `<===================  ==================`);
console.log(arrMult[1][1], `<===================  ==================`);

arrMult.push([10,11])
arrMult[arrMult.length - 1].push(12)
console.log(arrMult, `<===================  ==================`);

let isRight = false

isRight = !isRight 
console.log(isRight, `<===================  ==================`);