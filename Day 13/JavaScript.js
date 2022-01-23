// String Methods part 1

var a = 'JavaScript is a GREAT is language';

var b = a.length;
document.write(b + '<br><br>')

var b = a.includes('Great');
document.write(b + '<br><br>');

var b = a.toLowerCase();
document.write(b + '<br><br>');

var b = a.toUpperCase();
document.write(b + '<br><br>');

var b = a.startsWith('Java'); //its only search first word of String
document.write(b + '<br><br>');

var b = a.endsWith('EAT'); //its only search ending word of String
document.write(b + '<br><br>');

var b = a.search('is');
document.write(b + '<br><br>');

var b = a.search('Is');
document.write(b + '<br><br>');

var b = a.match(/is/g);
document.write(b + '<br><br>');

var b = a.indexOf('is');
document.write(b + '<br><br>');

var b = a.lastIndexOf('is');
document.write(b + '<br><br>');

var b = a.replace('is' , 'are');
document.write(b + '<br><br>');

var b = a.replace(/is/g , 'are');
document.write(b + '<br><br>');

var c = '  JavaScript     is a GREAT is language';

var b = c.trim();
document.write(b + '<br><br>');


// String Methods part 2
var c = 'Hello '
var a = 'JavaScript is a GREAT is language';

var b = a.charAt(2);
document.write(b + '<br><br>');

var b = a.charCodeAt(2);
document.write(b + '<br><br>');

var b = String.fromCharCode(65);
document.write(b + '<br><br>');

var b = c.concat(a);
document.write(b + '<br><br>');

var b = a.split(' ');
document.write(b + '<br><br>');

var b = a.repeat(2);
document.write(b + '<br><br>');

var b = a.slice(11,14);
document.write(b + '<br><br>');

var b = a.substr(0,5); //it does not inlcude ending index
document.write(b + '<br><br>');

var b = a.substring(1,5); ////it does not inlcude starting index
document.write(b + '<br><br>');

var c =25;

var b = c.toString();
document.write(b + ' ' + typeof b +'<br><br>');

var b = a.valueOf();
document.write(b + '<br><br>');

// Numbers Methods 

var a = '10.30 0';

var b = Number(a);
document.write(b + ' ' + typeof b +'<br><br>');

var b = parseInt(a);
document.write(b + ' ' + typeof b +'<br><br>');

var b = parseFloat(a);
document.write(b + ' ' + typeof b +'<br><br>');

var b =Number.isFinite(a);
document.write(b + ' ' + typeof b +'<br><br>');

var b =Number.isInteger(a);
document.write(b + ' ' + typeof b +'<br><br>');

var c = 10.284834;

var b = c.toFixed(2);
document.write(b+ '<br><br>');

var b = c.toPrecision(3);
document.write(b+ '<br><br>');


// Math Methods : its only work in animation, game developement and complex accounting and finance website

// Date Methods

var num =  new Date();

document.write(num + '<br><br>');

// Date Get Methods

document.write(num.getDate() + '<br><br>');

document.write(num.getDay() + '<br><br>');

document.write(num.getFullYear() + '<br><br>');

document.write(num.getMonth() + '<br><br>');

document.write(num.getHours() + '<br><br>');

document.write(num.getMinutes() + '<br><br>');

document.write(num.getSeconds() + '<br><br>');

document.write(num.getMilliseconds() + '<br><br>');

// Date set Methods

num.setDate(20);

document.write(num + '<br><br>');

num.setFullYear(2022);

document.write(num + '<br><br>');

num.setMonth(9);

document.write(num + '<br><br>');

num.setDay;

document.write(num + '<br><br>');

num.setHours(12);

document.write(num + '<br><br>');

num.setSeconds(12);

document.write(num + '<br><br>');

num.setMinutes(12);

document.write(num + '<br><br>');

num.setMilliseconds(12);

document.write(num + '<br><br>');

document.write(num.getDate() + '/' + num.getMonth() + '/' + num.getFullYear() + '<br><br>');


