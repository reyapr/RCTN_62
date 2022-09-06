export class Person {
    constructor({lastName, name}) {
        this.name = name;
        this.lastName = lastName
    }
    
    getName() {
        return this.name;
    }
}


export class Employee extends Person {
    constructor({name, lastName, idCardNumber}) {
        super({name, lastName})
        this.idCardNumber = idCardNumber;
    }
    doWork() {
        return 'completed!'
    }
    
    getNameWithCardNumber() {
        return [this.getName(), this.idCardNumber].join('-')
    }
}

export const bambang = new Person({name:'bambang', lastName:'sedunia'});
// const udin = new Employee(
//     {name:'udin', lastName:'sedunia', idCardNumber: 123}
// )
// console.log(
//     `name: ${udin.getName()} ${udin.lastName},`,
//     udin.doWork(),
//     udin.getNameWithCardNumber(),
// `<=================== udin ==================`);
// console.log(bambang.getName(), bambang.doWork(), `<===================  ==================`);


