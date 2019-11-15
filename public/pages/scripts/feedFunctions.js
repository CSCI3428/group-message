
function send(){
    
    
  
    // Variable Declaration
    var li = document.createElement("li");
    var message = document.getElementById("msg").value;
    var t = document.createTextNode(message);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var listElement = document.getElementById("myList");
    
    document.getElementById("msg").value = "";
    
    li.appendChild(t);
    
    if(message !== ""){
        
        document.getElementById("myList").appendChild(li);
        linebreak = document.createElement("br");
        document.getElementById("myList").appendChild(linebreak);
        
        listElement.scrollTop = listElement.scrollHeight - listElement.clientHeight;
        
    }
    
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
    
} // END send function
