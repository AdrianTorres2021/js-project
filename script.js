

//document.getElementById("textoutput").style.display = "none";

//function setText() {
   // var text = document.getElementById("textareabox").value = '';

//}
//let textareaFunction = getText();

function myFunction() {
    var x = document.getElementById("textareabox").value;
    var div = document.createElement('div');
    div.id = 'container';
    div.innerHTML = document.getElementById("textareabox").value;
    div.className = 'border pad';
    document.body.appendChild(div);
    document.getElementById("textareabox").innerHTML = "";
}
function myFunction2(){
    console.log("hola");
    document.getElementById("textareabox").innerHTML = "";
}

//document.getElementById("textoutput").innerHTML = "You wrote: " + x;
//document.getElementById("textoutput").style.display = "flex";