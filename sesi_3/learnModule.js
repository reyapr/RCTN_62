import { Employee, bambang } from './learnClass.js'
import add from './add.js'

const bambang2 = new Employee(
    {name: 'bambang', lastName: 'sedunia', idCardNumber: 456}
)

console.log(bambang, bambang2, `<=================== bambang ==================`);
console.log(add(1,2), `<=================== add test ==================`);
