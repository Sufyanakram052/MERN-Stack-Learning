var element;

// DOM addEventListener() part 1 Note: This is not use commonly

document.getElementById('header').onclick = abc;

function abc(){
    document.getElementById('header').style.backgroundColor = 'green'; 
}


// DOM addEventListener() part 2 Note: This is use commonly

document.getElementById('header').addEventListener('mouseenter', xyz);
document.getElementById('header').addEventListener('mouseleave', function(){
    document.getElementById('header').style.backgroundColor = 'green'; 

});

document.getElementById('header').addEventListener('click', abc);

function abc(){
    document.getElementById('header').style.backgroundColor = 'green'; 
}

document.getElementById('header').addEventListener('click',function(){
    document.getElementById('header').style.border = '10spx solid blue'
})

function xyz(){
    document.getElementById('header').style.backgroundColor = 'yellow'; 
}
