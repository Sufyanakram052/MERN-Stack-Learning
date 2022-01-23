var element;


// Get Methods

// Get Methods : innerText

element = document.getElementById('header').innerText;
console.log(element);

// Get Methods : innerHTML

element = document.getElementById('header').innerHTML;
console.log(element);

// Get Methods : getAttribute

element = document.getElementById('header').getAttribute('class');
console.log(element);

// Get Methods : getAttributeNode

element = document.getElementById('header').getAttributeNode('onclick');
console.log(element);

// Get Methods : Attribute

element = document.getElementById('header').attributes;
console.log(element);
element = document.getElementById('header').attributes[2].value;
console.log(element);


// Set Methods 

// Set Methods : InnerText

document.getElementById('header').innerText = 'Sufyan Akram';

element = document.getElementById('header').innerText;
console.log(element);

// Set Methods : InnerHTML

document.getElementById('header').innerHTML = '<h1>Sufyan Akram</h1>';

element = document.getElementById('header').innerHTML;
console.log(element);

// Set Methods : InnerAttribute


document.getElementById('header').setAttribute('class' , 'xyz');

document.getElementById('header').setAttribute('style' , 'border: 10px solid black');

element = document.getElementById('header').getAttribute('class');
element = document.getElementById('header').getAttribute('style');

console.log(element);

// Set Methods : Attributes

element = document.getElementById('header').attributes;
console.log(element);

element = document.getElementById('header').attributes[4] = 'fzz';
console.log(element);

// Set Methods : Remove Attribute


document.getElementById('main').removeAttribute('style');
console.log(element);






