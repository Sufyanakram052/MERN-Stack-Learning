document.write('<h1>JavaScript</h1> <br>')
// Arrays: Modify and Delete Element

var a = ['Sufyan', 22, 'BSCS', 8]
document.write(a + '<br>');

   a[1] = 21;
   document.write(a + '<br>');

delete a[1];
document.write(a + '<br>');  
document.write('<br>')
var ary = [
        ['Sufyan', 18 ,' Male', 'B.com'],
        ['Sufyan', 18 ,' Male', 'B.com'],
        ['Sufyan', 18 ,' Male', 'B.com'],
        ['Sufyan', 18 ,' Male', 'B.com'],
        ['Sufyan', 18 ,' Male', 'B.com']
    ] ;
    document.write("<table border= '1px' cellspacing='0'>");
   for(var a = 0; a < ary.length; a++)
   {
      document.write('</tr>');
       for(var b=0; b < ary[a].length; b++)
       {
           document.write('<td>'+ ary[a][b] + ' ' + '</td>')
           delete ary[a][1];
       }
       document.write('</tr>');
   }

   document.write("</table>");
   document.write('<br>');

   var ary = [
    ['Sufyan', 18 ,' Male', 'B.com'],
    ['Sufyan', 18 ,' Male', 'B.com'],
    ['Sufyan', 18 ,' Male', 'B.com'],
    ['Sufyan', 18 ,' Male', 'B.com'],
    ['Sufyan', 18 ,' Male', 'B.com']
    ] ;

document.write("<table border= '1px' cellspacing='0'>");
for(var a = 0; a < ary.length; a++)
{
  document.write('</tr>');
   for(var b=0; b < ary[a].length; b++)
   {
       document.write('<td>'+ ary[a][b] + ' ' + '</td>');
       
       if(a==0){
        delete ary[a][1];
    }
    else if(a==1){
        delete ary[a][2];
    }

    else if(a==2){
        delete ary[a][3];
    }

    
    else if(a==3){
        delete ary[a][2];
    }
    else{
        delete ary[a][1];
    }
    
}
   document.write('</tr>');
}
document.write("</table>");

document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: Sort and Reverse 
 
var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

a.sort();

document.write(a + '<br>');

a.reverse();
document.write(a + '<br>');
document.write('<br>');
document.write('<br>');


// Arrays Methods/Functions: push and pop

var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

a.push('Ali');

document.write(a + '<br>');

a.pop();
document.write(a + '<br>');
document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: shift and unshift

var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

a.shift();

document.write(a + '<br>');
a.unshift('Ali');

document.write(a + '<br>');
document.write('<br>');
document.write('<br>');


// Arrays Methods/Functions: shift and unshift

var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
var b = ['Shafiq', 'Haider'] 
var c = ['Bilal', 'Makhan']

var d = a.concat(b,c);
document.write(d + '<br>');

var e = d.join('/');
document.write(e + '<br>');
document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: slice and splice
var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

var b = a.slice(-3,-1);
document.write(b + '<br>');

a.splice(2,2, 'Mukhtara' ,'Sanju');
document.write(a + '<br>');
document.write('<br>');
document.write('<br>');


// Arrays Methods/Functions: isArray()

var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

var b = Array.isArray(a);
document.write(b + '<br>');

document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: indexOf and last indexOf

var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

var b = a.indexOf('BSCS', 2);
document.write(b + '<br>');

document.write(a + '<br>')
var c = a.lastIndexOf('BSCS', 3);
document.write(c + '<br>');

document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: includes()

var a = ['Sufyan', 'Ali', 'BSCS', 'Rehan']
document.write(a + '<br>');

var b = a.includes('Ali');
document.write(b + '<br>');


document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: Some and Every


var ages = [100,13,18,20];
document.write(ages + '<br>');

var c = ages.some(checkadult);
document.write(c + '<br>');

function checkadult(age){
  return age >= 18;
}

var c = ages.every(checkadult);
document.write(c + '<br>');

function checkadult(age){
  return age <= 18;
}

document.write('<br>');
document.write('<br>');


// Arrays Methods/Functions: find and findindex

var agess = [100,13,18,20];
document.write(agess + '<br>');

var cc = agess.find(checkadul);
document.write(cc + '<br>');

function checkadul(age){
  return age <= 18;
}

var c = ages.findIndex(checkadu);
document.write(c + '<br>');

function checkadu(age){
  return age >= 18;
}

document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: filter


var agess = [100,13,18,20];
document.write(agess + '<br>');

var cc = agess.filter(checkadul);
document.write(cc + '<br>');

function checkadul(age){
  return age >= 18;
}

document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: toString , Valueof and fill

var agess = [100,13,18,20];
document.write(agess + '<br>');

var b = a.toString();
document.write(b + '<br>');
document.write(b + '<br>');
document.write(typeof b + '<br><br>');
var b = a.fill('sufi');
document.write(b + '<br>');

document.write('<br>');
document.write('<br>');

// Arrays Methods/Functions: forEach loop

var ages = [100,13,18,20];

ages.forEach(function(value , index){
    document.write(index + ':' + value + '<br>')
});

document.write('<br>');
document.write('<br>');

// Objects: 

var a = {
  fname : 'sufyan' ,
  lname : 'akram' ,
  age : 22 , 
  email : 'Sufian@gmail.com' ,
  country : 'Pakistan' , 
  salary : function(){
    return 50000;
  } ,
  fullname : function(){
    return this.fname + ' ' + this.lname;
  },
  living : {
    city : 'Hasilpur' ,
    country : 'Pakistan' ,
  },
  class : ['Matric' , 'Intermediate' , 'BSCS'] 
}

document.write(a + '<br>')
document.write( a.fname +'<br>');
document.write( a.lname +'<br>');
document.write( a.age +'<br>');
document.write( a.country +'<br>');
document.write( a.email +'<br>');
document.write( a.salary() +'<br>');
document.write( a.fullname() +'<br>');
document.write( a.living.city +'<br>');
document.write( a.living.country +'<br>');
document.write( a.class +'<br>');


document.write('<br>');
document.write('<br>');

// Objects Part 2

var person = new Object();
person.fname = 'sufyan' ;
person.lname = 'akram' ;
person.age = 22 ;

document.write( person.fname +'<br>');
document.write( person.lname +'<br>');
document.write( person.age +'<br>');

document.write('<br>');
document.write('<br>');

// Array of Objects

var student = [
  { fname : 'Sufyan Akram' , age : 22 },
  { fname : 'Sufyan Akram' , age : 22 },
  { fname : 'Sufyan Akram' , age : 22 }

];

console.log(student);
for(var a = 0 ; a < student.length; a++){
    document.write(student[a].fname + ' ' + student[a].age +  '<br>');
} 

document.write('<br>');
document.write('<br>');

// Constant Variable with array and objects

const st = [10, 20, 30];

st[1]=25;
document.write(st + '<br>');

const sr = {
  fname : 'Ali' ,
  lname : 'Akram'
}

sr.fname = 'Sufyan';
document.write(sr.fname + '<br>');

document.write('<br>');
document.write('<br>');


// for/in loop

var a = {
  fname : 'sufyan' ,
  lname : 'akram' ,
  age : 22 , 
  email : 'Sufian@gmail.com' ,
  country : 'Pakistan' ,  
  class : ['Matric' , 'Intermediate' , 'BSCS'] 
}

for(var i in a){
  document.write(a[i] + '<br>');
}

document.write('<br>');
document.write('<br>');

// Map Method

var a = [11, 12, 14, 15];

var b = a.map(function(x){
  return x*10;
})

document.write(b + '<br>');










