
// Variables : var, let, const

//var 

var a = 'Hello'
var a = 'sufyan Akram'
a = 'Sufi';
console.log(a);

//let -> we can reasign value to let but not declear it

let b = 'Hello'
b = 'Sufyan Akram';
console.log(b);

//const

var c = 'Hello'
console.log(c);

// scope
//var 

for(var a=1; a<=5; a++)
{
    document.write(a +'<br>');
}

console.log(a);

//let and const same as let 

for(let g=1; g<=2; g++)
{
    document.write(g +'<br>');
    console.log(g);
}

document.write('<br><br>')
// Tempalte String and Template Literals

let user = 'Sufyan Akram';
let marks = 350;
let print = `Hello "${user}" 
your marks is 
'${marks}'`

document.write(print);
console.log(print);
document.write('<br><br>')

let fname = 'Sufyan'
let lname = 'Akram'

function fullname(fname, lname){
return `${fname} ${lname}`
}

let hello = `Hello ${fullname(fname, lname)}`;
document.write(hello);
console.log(hello);
document.write('<br><br>')

// Arrow function => Advance features of Arrow Function

// Simple Functions

let fn = function(name){
    return `Hello and Welcome ${name}`
}

console.log(fn('Mr Deadly Recon'))

// Arrow Function

var fm = (name, age) => {
    return `Hello and Welcome ${name} - ${age}`
}
document.write(fm('Mr Deadly Recon', 23))
console.log(fm('Mr Deadly Recon', 23))
console.log(typeof fm)

// Arrow Function : if you have single line of code

var fm = (name, age) => `Hello and Welcome ${name} - ${age}`
console.log(fm('Mr Deadly Recon', 23))
console.log(typeof fm)

// Arrow Function : if you know that your parameter have only one value

var fm = name => `Hello and Welcome ${name}`
console.log(fm('Mr Deadly Recon'))
console.log(typeof fm)
document.write('<br><br>')

// Rest operator

function sum(name, title, ...args){
console.log(arguments)

document.write(`Hello ${name} title is ${title}: `)

var sum = 0

for(var i in args){
 sum += args[i]
}
document.write(sum + '<br>')
console.log(sum)
}

sum('Sufan Akram', 'BSCS',10,20,40)
sum('Deadly Recon', 'Gamer',15,45,40)
document.write('<br><br>')


// Spread Operator

// Example 1
document.write('<h2>Spread Operator</h2>')

function sum(name, ...args){
    console.log(arguments)
    
    document.write(`Hello ${name} : `)
    
    var sum = 0
    
    for(var i in args){
     sum += args[i]
    }
    document.write(sum + '<br>')
    console.log(sum)
    }
    var arr = [10,20,40,50,60]
    sum('Sufan Akram',...arr)
    document.write('<br><br>')
   
// Example 2

var arr1 = [10,20,40,50]
var arr2 = [...arr1]

arr1.push(50)

console.log(arr1)
console.log(arr2)

// Example 3

var arr1 = [10,20,40,50]
var arr2 = [60, 70]

var arr3 = [5, ...arr1, ...arr2, 80]

console.log(arr3)

// Example 4

var obj1 = {
    Name : 'Sufyan Akram',
    Course : 'BSCS'
}

var obj2 = {
    age : 22
}

var obj3 = { ...obj1, ...obj2}
console.log(obj3)

// Object Literals

// old method
var name = 'Sufyan Akram'
var Course = 'Adbance JavaScript'

var obj= {
   name: name,
   Course: Course
}
console.log(obj);

// New Method

var neme = 'Sufyan Akram'
var Course = 'Adbance JavaScript'

var obj= {
  neme,
  Course,
}
console.log(obj);

// Example 1

var n = 'student'

var objj = {
    [n + "naam"] : 'Sufyan Akram' ,
    course : 'Computer Science' , 
    detail: function(){
        return `${this.studentnaam} is a student of ${this.course}`
    }
}

console.log(objj)
console.log(objj.detail())
document.write(objj.detail())

document.write('<br><br>')

// Example 2 : New Function Syntax

var n = 'student'

var objj = {
    [n + "naam"] : 'Sufyan Akram' ,
    course : 'Computer Science' , 
    'detail show'(){
        return `${this.studentnaam} is a student of ${this.course}`
    }
}

console.log(objj)
console.log(objj['detail show']())
document.write(objj['detail show']())
document.write('<br><br>')
// Example 3 : Function within objects

var ffname = 'Sufyan'
var llname = 'Akram'
var course = 'BSCS'

function student(ffname, llname, course){
 
    let fullname = ffname + ' ' + llname
    
    return {fullname , course}

}
let s = student(ffname, llname, course)
console.log(s.fullname)
console.log(s.course)

// Destructuring Array

// Example 1

var users = ['Sufyan Akram', 22, 'Hasilpur']

var [nname, age = 25, city] = users

console.log(nname)
console.log(age)
console.log(city)

// Example 2

var userss = ['Sufyan Akram', 22, 'Hasilpur',['Male', 45000]]

var [nname, age = 25, city,[gender, salary]] = userss

console.log(gender)
console.log(salary)

// Example 3

function use([nme, agee, ciity]){
    document.write('<br><br>')
    document.write(nme)
    document.write('<br><br>')
    document.write(agee)
    document.write('<br><br>')
    document.write(ciity)

}

use (['Sufyan Akram', 22, 'Hasilpur'])

// Example 3

function aaa(){
    return ['Sufyan Akram', 22, 'Hasilpur']
}

var [name, age, city] = aaa()

console.log(city)

// Destructuring Object

// Example 1

var abj = {
    ame : 'Sufi',
    ge : 23 ,
    ity : 'Sahiwal'
}

let {ame , ge , ity} = abj

console.log(ame)
console.log(ge)
console.log(ity)

// Example 2

var abj = {
    ame : 'Sufi',
    ge : 23 ,
    ity : 'Sahiwal'
}

let {ame : r , ge : rr , ity : rrr} = abj

console.log(r)
console.log(rr)
console.log(rrr)

