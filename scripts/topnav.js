 function miniNav() {
    var navStatus = document.getElementById("myTopnav");
    var icon = document.querySelector(".icon i");

    if(navStatus.className === "topnav") {
        navStatus.className += " responsive";
        icon.className = "fa fa-times";
    } else {
        navStatus.className = "topnav";
        icon.className = "fa fa-bars";
    }

 }