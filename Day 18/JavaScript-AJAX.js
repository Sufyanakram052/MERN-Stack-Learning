// JavaScript AJAX Code

function loadData(){
    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            document.getElementById('demo').innerHTML = this.responseText
            console.log(this.responseText)
        }
        else if(this.readyState == 4 && this.status == 404){
            document.getElementById('demo').innerHTML = 'Page Not Found'
            console.log(this.responseText)
        }
    }





    xhttp.open('GET','Content/Read-ME.txt',true)
    xhttp.open('GET','https://jsonplaceholder.typicode.com/posts',true)
    xhttp.send()
}
