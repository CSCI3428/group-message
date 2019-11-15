function goBack() {
    window.history.back();
}

function checkIfGood() {
    var hour = document.getElementById('hour').value;
    var minute = document.getElementById('minute').value;
    var time = document.getElementById("noon").options[document.getElementById("noon").selectedIndex].value;
    var loc = document.getElementById("loc").options[document.getElementById("loc").selectedIndex].value;
    var cardStatus = document.getElementById("cardStatus").checked;

    if (isNaN(hour) || isNaN(minute) || (0 > parseInt(hour)) || (parseInt(hour) > 12) || (0 > parseInt(minute)) || (parseInt(minute) > 59) || hour == "" || minute == "")
        alert("Invalid Time");


    else {


        alert("Time of game: " + hour + ":" + minute + " " + time + "\n" +
            "Location: " + loc + "\n" +
            "You are " + responsibility() + " bringing the cards");

        /*for (var i = 0, length = loc.length; i < length; i++){
				
				if (loc[i].checked){
					
					// do whatever you want with the checked radio
								
					}

					// only one radio can be logically checked, don't check the rest
					break;
				}
			}
		}*/


    }

function responsibility() {
        if (cardStatus) {
            return "";
        } else {
            return "NOT";
        }


    }

}