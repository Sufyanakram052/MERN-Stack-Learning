// Introduction of OOP <Classes and objects>

class student{
    constructor(name, age){
        this.studentname = name
        this.studentage = age
        console.log('constructor Method')
    }

    hello(){
      document.write(`Hello ${this.studentname} your age is ${this.studentage} <br>`)
    }

    static staticfunction(){
        console.log('Static Function')
    }
}

var a = new student('Sufyan Akram', 22)
a.hello()
var b = new student('Mr Deadly Recon', 22)
b.hello()
student.staticfunction()

// Inheritance

//example 1
class employee{
    constructor(name){
        this.empName = name
        console.log(`constructor : employee`)
    }

    info(){
        console.log(`constructor : employee ${this.empName}`)
    }
}

class manager extends employee{
    info(){
        console.log(`constructor : manager ${this.empName}`)
        super.info()
    }

}

let c = new manager('Sufyan Akram') 
c.info()

// Example 2

class professor{
    constructor(name, age, salary){
        this.proName = name
        this.proAge = age
        this.proSalary = salary
        //console.log(`constructor : professor`)
    }

    professor_info(){
        document.write(`<h3>Professor Class</h3> 
                        Name : ${this.proName} <br>
                        Age : ${this.proAge} <br>
                        Salary : ${this.proSalary}`)
    }

}

class Assistant_Professor extends professor{
   info(){
      let ta = 1000
      let pt = 2000
      let totalsalary = this.proSalary + ta + pt

      document.write(`<h3>Assitant Professor Class</h3> 
      Name : ${this.proName} <br>
      Age : ${this.proAge} <br>
      Salary : ${totalsalary}`)
      
   }
}

class test extends Assistant_Professor{

}

let aa = new test('Sufyan Akram', 22, 14000)
aa.professor_info()
aa.info()

// Promise

//Example 1

let complete = true

let prom = new Promise(function(resolve, reject){
    if(complete){
         resolve('I am Successful')
    }
    else{
     reject('I am Failed')
    }
})

console.log(prom)

// Example 2

function promise(taken){
    console.log('Fetching data, Please wait!..')
return new Promise(function(resolve, reject){
   setTimeout(() => {
    if(taken){
        resolve('I am Successful')
   }
   else{
    reject('I am Failed')
   }
   }, 1000);
})
}
let onfulfillment = (result) =>{
    console.log(result)
}

let onrejection = (error) =>{
    console.log(error)
}

promise(false).then(onfulfillment).catch(onrejection)

// Example 3

function promises(aaa, bbb){
    console.log('Fetching data, Please wait!..')
    let cc = aaa / bbb
return new Promise(function(resolve, reject){
   setTimeout(() => {
    if(aaa, bbb){
        resolve(`Your answer is : ${cc}`)
   }
   else{
    reject('Failed To Calculate')
   }
   }, 1000);
})
}

promises(9,2).then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error)
})


// Promise.all()

//Example 1

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('That is our first promise')
        resolve(10)
    }, 1 * 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('That is our Second promise that is failed')
        reject('I am Failed')
    }, 2 * 1000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('That is our Third promise')
        resolve(30)
    }, 3 * 1000);
})

var total = 0

Promise.all([p1, p2, p3]).then((result) => {

    for (const i in result) {
        total = total + result[i];
    }
    console.log(`Result ${result}`)
    console.log(`Total ${total}`)
}).catch((error) => {
    console.log(`Error ${error}`)
})

//Example 2

let promiseCall = function(returnData, Message) {

    return function(resolve,reject){
        setTimeout(() => {
            console.log(`This is our ${Message} promise`)
            resolve(returnData)
        }, returnData * 100);
    }
    
}

let p4 = new Promise(promiseCall(40, 'First'))
let p5 = new Promise(promiseCall(50, 'Second'))
let p6 = new Promise(promiseCall(60, 'Third'))
/* 
let p7 = new Promise(function(resolve, reject){
    reject('The 4th promise is rejected')
})
p7 is not called 
*/

var total = 0

Promise.all([p4, p5, p6]).then((result) => {

    for (const i in result) {
        total = total + result[i];
    }
    console.log(`Result ${result}`)
    console.log(`Total ${total}`)
}).catch((error) => {
    console.log(`Error ${error}`)
})
