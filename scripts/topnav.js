 
 window.onscroll = function() {stickyNav()};
 


 function miniNav() {
    var navStatus = document.getElementById("navbar");
    var icon = document.querySelector(".icon i");

    if(navStatus.className === "topnav") {
        navStatus.className += " responsive";
        icon.className = "fa fa-times";
    } else {
        navStatus.className = "topnav";
        icon.className = "fa fa-bars";
    }

 }

 function stickyNav() {

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
 }