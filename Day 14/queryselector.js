var element;

// querySelector

document.querySelector('#menu').innerHTML = '<ul><li>Page 1</li><li>Page 2</li><li>Page 3</li></ul>'

element = document.querySelector('.services-box');
console.log(element);

element = document.getElementsByClassName('services-box');
console.log(element);

// querySlectorAll

element = document.querySelectorAll('.services-box');
console.log(element);

element = document.querySelectorAll('.services-box')[1].innerHTML;
console.log(element);

element = document.querySelectorAll('a');
console.log(element);


element = document.querySelectorAll('a')[3].innerText;
console.log(element);

element = document.querySelectorAll('#header #menu');
console.log(element);