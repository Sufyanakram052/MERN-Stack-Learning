
// DOM Create Methods : createElement, createTextNode and createComment

var newElement = document.createElement('h1');

var newText = document.createTextNode('this is just text');

var newComment = document.createComment('This is comment');

console.log(newElement);
console.log(newText);
console.log(newComment);

// DOM Append Method : appendChild and insertBefore

// appendChild
var a = newElement.appendChild(newText);
console.log(a);

document.getElementById('text').appendChild(newElement);
document.getElementById('text').appendChild(newComment);

//insertBefore

var newTexxt = document.createTextNode('This is a text that we are inserting through insertBefore');
var newElemeent = document.createElement('h2');

newElemeent.appendChild(newTexxt);

var target = document.getElementById('text');

var cc = target.children;
console.log(cc);

target.insertBefore(newElemeent, target.children[0]);

// DOM Append Method : insertAdjacentElement , insertAdjacentHTML and insertAdjaacentText

//insertAdjacentElement

var element = document.createElement('h1');

var text = document.createTextNode('This is a text');

element.appendChild(text);

var target = document.getElementById('adjacent-position');

target.insertAdjacentElement('beforebegin', element);

//insertAdjactHTML

var text = '<h2>My name is Sufyan Akram</h2>';

target.insertAdjacentHTML('beforeend', text);

// insertAdjacentText

var text = 'this is only text';

target.insertAdjacentText('afterend', text);

// DOM replace and Remove Methods : replaceChild and removeChild

// replaceChild

var element = document.createElement('li');
var text = document.createTextNode('Wow This is new Text');

element.appendChild(text);

var target = document.getElementById('list');

var oldelement = target.children[1];

console.log(oldelement);

target.replaceChild(element, target.children[1]);


// removeChild

var target = document.getElementById('list');

var oldelement = target.children[0];
console.log(oldelement);

target.removeChild(oldelement);


// DOM CloneNode()

var target = document.getElementById('list').children[0];

var copynode = target.cloneNode(true);
console.log(copynode);

document.getElementById('clone').appendChild(copynode);

// DOM Contains Method

var parentElement = document.getElementById('list');

var tgt = document.getElementById('abc');

var find = parentElement.contains(tgt);
console.log(find);

// DOM hasattribute() and hasChildnode()

var target = document.getElementById('list');

var find = target.hasAttribute('class');
console.log(find);

var find = target.hasChildNodes();
console.log(find);

// DOM isequalNode()

var target1 = document.getElementById('list').children[1];
console.log(target1);

var target2 = document.getElementById('clone').children[1];
console.log(target2);

var equal = target1.isEqualNode(target2);
console.log(equal);

// form Events : Focus, blur and input


// focus

function focusFunction(focus){
    focus.style.backgroundColor = 'lime';
}

// blur

document.getElementById('fname').addEventListener('blur', abc);
document.getElementById('input').addEventListener('blur', abc);
document.getElementById('select').addEventListener('blur', abc);

function abc(){
   this.style.backgroundColor = '';
}

// input


document.getElementById('input').addEventListener('input' , xyz);

function xyz(){
    var z = document.getElementById('input').value;
    document.getElementById('undo').innerHTML = z;
}


// form Events : change, select

// chnage

document.getElementById('select').addEventListener('change', changeFunction);

function changeFunction(){
    var x = document.getElementById('select').value;
    document.getElementById('make').innerHTML = x;
}

document.getElementById('input').addEventListener('change', changeFunction);

function changeFunction(){
    var x = document.getElementById('input').value;
    document.getElementById('make').innerHTML = x;
}

// select
//this is not commonly used

// submit

document.getElementById('form').addEventListener('submit', submitFunction);

function submitFunction(){
    var x = document.getElementById('fname').value;
    var y = document.getElementById('input').value;
    var z = document.getElementById('select').value;

    document.getElementById('file').innerHTML = 'Name' + x +'   ' + 'Class' + y + '    ' + 'Country' + z;
}


// for testing purpose (Copy Input value or text area value and paste it where you want)

document.getElementById('someletter').addEventListener('input' , copyInput);
var q;
function copyInput(){
  q = document.getElementById('someletter').value;
}

document.getElementById('click').addEventListener('click', clickFunction)

var target = document.getElementById('pan');
function clickFunction(){
    target.insertAdjacentHTML('beforeend' ,'<li>'+ q);
    
}