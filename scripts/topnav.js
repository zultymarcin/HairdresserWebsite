 function miniNav() {
    var navStatus = document.getElementById("myTopnav");
    if(navStatus.className === "topnav") {
        navStatus.className += " responsive";
    } else {
        navStatus.className = "topnav";
    }

 }