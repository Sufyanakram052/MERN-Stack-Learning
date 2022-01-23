
  document.write('Sufyan Akram <br>');
  document.write(' <h1><i> I am strating JavaScript </i> </h1><br>'); //Here is Comment

  //Variables Var

  var x = '<h1> This is javascript</h1> <br>';
      x=1000;
  document.write(x);

  //Variables Let and Const

   let aa = '<h1> This is javascript</h1> <br>';
   document.write(aa);

   const aaa = '<h1> Hello World </h1> <br>';
   document.write(aaa);

   //DataTypes

   var a = 'This is String '; //String
   var b = 25 ; // Number
   var c =  true;
   var d = ['HTML', 'CSS', 'JavaScript' ] //Array
   var e = {first:'Sufyan', last: 'Akram' }; //object
   var f = null ; //null
   var g; //undefind

   document.write(a,typeof a,'<br>',b ,typeof b,'<br>' , c, typeof c,'<br>',d ,typeof d,'<br>', e,typeof e,'<br>',f ,typeof f,'<br>', g ,typeof g,'<br>');
   

   // Arithmetic Operator

   var q = 100;
   var w = 22;
   document.write(q-w , '<br>');
   document.write(q+w , '<br>');
   document.write(q*w , '<br>');
   document.write(q/w , '<br>');
   document.write(q%w , '<br>');
   document.write(q ** w , '<br>');
   document.write(q++ , '<br>');
   document.write(q-- , '<br>');

   //Assignment Operator

   var qq = 100;
   var w = 22;
   document.write(qq-=w , '<br>');
   document.write(qq += w , '<br>');
   document.write(qq *= w , '<br>');
   document.write(qq /= w , '<br>');
   document.write(qq %= w , '<br>');
   document.write(qq **= w , '<br>');

   //Google Chrome Console
    console.log(qq);
    console.log([1,2,3]);
    console.table([1,2,3]);
    console.error('this is error');
    console.warn('this is error');
    console.clear();

    console.time('test');
    console.error('this is error');
    console.warn('this is error');
    console.error('this is error');
    console.warn('this is error');
    console.error('this is error');
    console.warn('this is error');
    console.timeEnd('test');
    document.getElementById('main');

    //comparison operator
    var qq = 100;
    var w = 22;
    document.write(qq == w , '<br>');
    document.write(qq === w , '<br>');
    document.write(qq != w , '<br>');
    document.write(qq !== w , '<br>');
    document.write(qq > w , '<br>');
    document.write(qq < w , '<br>');
    document.write(qq < w , '<br>');
    document.write(qq >= w , '<br>');
    document.write(null == undefined , '<br>');

    // if Statement
    
    var today = 'Monday';

    if (today = 'Monday'){
        document.write('Mon' , '<br>');
    }
    if (today != 'Monday'){
        document.write('False  <br>');
    }

    // logical operator

    var x = 10;
    var b = 20;

    if( x <= b &&  x >= 9){
        document.write('Congrats', '<br>');
    } 
    console.log(!a == b);

    // If Else Statement
    var today = 'Monday';

    if (today != 'Monday'){
        document.write('Mon' , '<br>');
    }
    else{
        document.write('No today is Saturday.  <br>');
    }

    // If Else If statement

    var today = 'Monday';

    if (today != 'Monday'){
        document.write('Mon' , '<br>');
    }
    else if( today == 'Monday'){
        document.write('yes today is:' + today, '<br>');
    }
    else{
        document.write('No today is Saturday', '<br>');
    }

    // Conditional Ternary Operator

    var x = 15;
    var z;

    (x > 10 )?  z ='true' : z = 'false';
    document.write(z , '<br>')

    // Switch Statement
    
    var day = 10;

    switch(day){
          case 0:
            document.write('Today is Monday' , '<br>');
          break;

          case 1:
            document.write('Today is tuesday' , '<br>');
          break;

          case 2:
            document.write('Today is wednesday' , '<br>');
          break;

          case 3:
            document.write('Today is Thursday' , '<br>');
          break;

          case 4:
            document.write('Today is Friday' , '<br>');
          break;

          case 5:
            document.write('Today is Saturday' , '<br>');
          break;

          case 6:
            document.write('Today is Sunday' , '<br>');
          break;

         default:
            document.write('Today is Sunday' , '<br>');
    }

    // Alert Box

    alert('Yes');

    // Confirm Box

    confirm('Are sure you want to continue?');

    // promot Box
    
    document.write(prompt('Write Something.'));
    
    // Functions // Definiation or Declartion
    document.write('<br>');
    function fname(){
        document.write('Sufyan');
        document.write('<br>');
        document.write('Akram');
        document.write('<br>')
    }
    
     fname();
     fname();
     fname();

     // Function with Parameters

     function name(fname, lname){
        document.write('Hello : ' + fname + ' ' + lname , '<br>');
    }
    
     name('Adil', 'Akram');

     // Function with Parameters and return Value

     function plus(a,b){
         var c = a + b;
         return c;
     }

     var d = plus(10,30);
     document.write(d , '<br>');

     // Local(use within scope) and global(use anywhere) variable

     // Events

     function hehe(){
       alert('Hello Everyone');
       }

    // While Loop

    var a = 1; 
    document.write('<ul>');
    while (a < 10){
        document.write("<li>This is increament </li>");
        a++;
    }
    document.write('</ul>');

    // Do While Loop

    var a = 10;
    document.write('<ul>');
    do{
        document.write("<li>This is increament </li>");
        a--;
    }
    while(a >= 1)
    document.write('</ul>');

    // For loop

    for(var a=1 ; a <= 10; a++)
    {
        document.write( 'index of ['+  a + '] is :' + 'Sufyan Akram <br>');
    }
    document.write('<br>');

    // Break and Continue Statement
    for(var a=1 ; a <= 10; a++)
    { if(a==3){
        document.write( 'Value of ['+  a + '] is :' + 'Sufyan Akram <br>');
        continue;
        }
        document.write( 'index of ['+  a + '] is :' + 'Sufyan Akram <br>');
    } 

    document.write('<br>');

    for(var b=1 ; b <= 10; b++)
    { 
        if(b == 3){
        document.write( 'Value of ['+  b + '] is :' + 'Sufyan Akram <br>');
        break;
        }
        document.write( 'index of ['+  b + '] is :' + 'Sufyan Akram <br>');
    }

    document.write('<br>');
    // Even and Odds Numbers
    for(var b=1 ; b <= 10; b++)
    { 
        if(b % 2 == 0){
        document.write('Even number : ' +  b + '<br>');
        }
    }
     document.write('<br>');
    for(var b=1 ; b <= 10; b++)
    { 
        if(b % 2 != 0){
        document.write('odd number : ' +  b + '<br>');
        }
    }
    

    // Nested For loop

    for(var a = 1; a <= 100; a=a+10){
    for( var b = a; b < a+10; b++ ){
        document.write(' ' + b);
    }
    document.write('<br>'); 
   }

   for(var a = 1; a <= 3; a++)
   {
       for( var b = 1; b <= a; b++)
       {
           document.write(b); 
       }
       document.write('<br>');
   }
   for(var a = 2; a >= 1; a--)
   {
       for( var b = 1; b <= a; b++)
       {
           document.write(b); 
       }
       document.write('<br>');
   }

   document.write('<br>');

   for(var a = 1; a <= 5; a++)
   {
       for( var b = 1; b <= a; b++)
       {
           document.write(a); 
       }
       document.write('<br>');
   }
   document.write('<br>');

   for(var a = 5; a >= 1; a--)
   {
       for( var b = a; b >= 1; b--)
       {
        document.write(b); 
       }
       document.write('<br>');
    }

    // Arrays

    var Arr = [10, 20, 30, 40 ,50]
    
    document.write(Arr[2]);
    document.write('<br>');
    var sum = 0;
    for(var a=1 ; a < 5; a++)
    {
        document.write('Value of Array Index [' + a + '] ' + Arr[a] + '<br>');
        sum = sum + Arr[a];
    }
    document.write('Total Sum: '+ sum);
    document.write('<br>');

    // Arrays: Create New Array

    var arr = new Array(5);
    for (var a = 1; a <= 5; a++){
        arr[a]= prompt('Enter The Array value');
        document.write('Value of array inded [' + a + ']' + arr[a] + '<br>');
    }
    document.write('<br>');

    // Arrays: Multidemsional Arrays

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
       }
       document.write('</tr>');
   }
   document.write("</table>");

   // Arrays : Modify and Delete Array Element
   












   







