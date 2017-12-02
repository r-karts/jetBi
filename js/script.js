document.getElementById("select-status").onclick = function() {
    if (this.selectedIndex) {
        document.getElementsByClassName("point")[0].style.background = "red";
    } else {
        document.getElementsByClassName("point")[0].style.background = "green";
    }
}

document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == 'complete') {
        document.getElementById("option2").onclick = function() {
            document.getElementsByClassName("contacts-list")[0].style.display = "none";
            document.getElementsByClassName("converstations-list")[0].style.display = "block"; 
        }
        document.getElementById("option1").onclick = function() {
            document.getElementsByClassName("contacts-list")[0].style.display = "block";
            document.getElementsByClassName("converstations-list")[0].style.display = "none"; 
        }
    }
}