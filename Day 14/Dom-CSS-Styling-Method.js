var element;

// DOM CSS Styling Method

// DOM CSS Styling Method : Style

document.querySelector('#header').style.backgroundColor = 'tan'; 

document.querySelector('#header').style.color = 'blue'; 


element = document.querySelector('#header').style.color;
console.log(element);


// DOM CSS Styling Method : className

document.querySelector('#header').className = 'abc, xyz'

element = document.querySelector('#header').className;
console.log(element);

// DOM CSS Styling Method : classList


document.querySelector('#header').classList.add('zee','bee'); // add class

element = document.querySelector('#header').classList;
console.log(element);

document.querySelector('#header').classList.remove('abc','xyz'); //remove class

element = document.querySelector('#header').classList;
console.log(element);

// DOM CSS Styling Method : classList Methods : add

document.getElementById('header').addEventListener('click', function(){
    document.getElementById('header').classList.add('sufi','efg');
    var a =  document.getElementById('header').classList;
    console.log(a);
});

// DOM CSS Styling Method : classList Methods : add

document.getElementById('header').addEventListener('click', function(){

    document.getElementById('header').classList.remove('aaa');
    
    var a =  document.getElementById('header').classList;
    
    var a =  document.getElementById('header').length;
    console.log(a);

});