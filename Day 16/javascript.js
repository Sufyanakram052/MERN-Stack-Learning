
// setintervel and clearintervel

var a = 0;
 
var id = setInterval(Anim, 100);

function Anim(){
   a = a + 10;

if(a == 1000){
   clearInterval(id);
}
else{
    var target = document.getElementById('setintervel');
    target.style.marginLeft = a + 'px';
}
}



// setTimeout and cleartimeout

var pic = setTimeout(stopp, 3000);
function stopp(){
 var  target = document.getElementById('settimeout');
 target.style.width = '500px';
}

function stop(){
    clearTimeout(pic);
}