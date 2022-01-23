var element;

// DOM addEventListener : useCapture
document.querySelector('.outer').addEventListener('click',function(){
    alert('outer Div');
}, true);

document.querySelector('.inner').addEventListener('click',function(){
    alert('inner Div');
},false);

//DOM Traversel Methods

//DOM Traversel Methods : parentElement and parentNode

document.getElementById('C').parentElement.style.backgroundColor = 'red';

var a = document.getElementById('C').parentElement;
console.log(a);

document.getElementById('akram').parentNode.style.backgroundColor = 'yellowgreen';

var a = document.getElementById('akram').parentNode;
console.log(a);


//DOM Traversel Methods : childern and childnode


var a = document.getElementById('sufian').children;
console.log(a);

var a = document.getElementById('akram').children;
console.log(a);

var a = document.getElementById('akram').children[1].innerHTML;
console.log(a);


var b =  document.getElementById('akram').childNodes;
console.log(b);

document.getElementById('akram').childNodes[1].innerHTML = '<h2>Akram</h2>';

//DOM Traversel Methods : firstchild, firsElementChild , lastElementChild and lastchild

//firstElementChild
var a = document.getElementById('akram').firstElementChild.innerHTML;
console.log(a);

document.getElementById('akram').firstElementChild.style.backgroundColor = 'blue';
console.log(a);

//last Element Child
var a = document.getElementById('akram').lastElementChild.innerHTML;
console.log(a);
document.getElementById('akram').lastElementChild.style.backgroundColor = 'blue';
console.log(a);

//firstChild

element = document.getElementById('akram').firstChild;
console.log(element);

element = document.getElementById('C').firstChild;
console.log(element);

//lastChild

var d = document.getElementById('akram').lastChild;
console.log(d);


//DOM Traversel Methods : nextSibling, previousSibling, nextElementSibling and previousElementSibling

// nextElementSibling

var aa = document.getElementById('C').nextElementSibling;
console.log(aa);

var aaa = document.getElementById('C').nextElementSibling.innerHTML;
console.log(aaa);

document.getElementById('C').nextElementSibling.style.backgroundColor = 'green';

var aaaaa = document.getElementById('E').nextElementSibling;
console.log(aaaaa);

// previousElementSibling

var bb = document.getElementById('C').previousElementSibling;
console.log(bb);

var aaaa = document.getElementById('C').previousElementSibling.innerHTML;
console.log(aaaa);

document.getElementById('C').previousElementSibling.style.backgroundColor = 'Tan';


var aaaa = document.getElementById('head').previousElementSibling;
console.log(aaaa);

//nextSibling

var bbb = document.getElementById('C').nextSibling;
console.log(bbb);

//ppreviousSibling

var bbbb = document.getElementById('C').previousSibling;
console.log(bbbb);
