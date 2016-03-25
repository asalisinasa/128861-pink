(function() {

    //////////////// Navigation ////////////////

    var navToggle = document.querySelector(".page-header__hamburger");
    var navIcon = document.querySelector(".page-header__hamburger-lines");
    var navWrapper = document.querySelector(".page-nav");
    var headerMini = document.querySelector(".page-header__mini");
    var header = document.querySelector(".page-header");

    navIcon.classList.remove("page-header__hamburger-lines--cross");
    navWrapper.classList.add("page-nav--closed");
    headerMini.classList.add("page-header__mini--closed");

    navToggle.addEventListener("click", function() {
        if (navIcon.classList.contains("page-header__hamburger-lines--cross")) {
            navIcon.classList.remove("page-header__hamburger-lines--cross");
            navIcon.classList.add("page-header__hamburger-lines");
            navWrapper.classList.add("page-nav--closed");
            headerMini.classList.add("page-header__mini--closed"); 
            header.classList.remove("page-header--active");
        } else {
            navIcon.classList.add("page-header__hamburger-lines--cross");
            navWrapper.classList.remove("page-nav--closed");
            headerMini.classList.remove("page-header__mini--closed"); 
            header.classList.add("page-header--active");
        }
    });
})();