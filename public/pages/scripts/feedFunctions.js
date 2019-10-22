
function display(){
    
    var message = document.getElementById("msg").value;
    
    document.getElementById("chat").innerHTML = message;
    
    document.getElementById("msg").innerHTML = "";
    
}
