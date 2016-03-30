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

    //////////////// Popups ////////////////

    var form = document.querySelector(".form");
    if (form) {
        var inputRequired = form.querySelectorAll("[required]");
        var popup = document.querySelectorAll(".popup");
        var popupFailure = document.querySelector(".popup--failure");
        var popupAccept = document.querySelector(".popup--accept");
        var btnFailure = popupFailure.querySelector(".btn--failure");
        var btnAccept = popupAccept.querySelector(".btn--accept");

        form.onsubmit = function(event) {
            event.preventDefault();
            for (i = 0; i < inputRequired.length; i++) {
                if (!inputRequired[i].value) {
                    popupFalse.classList.add("popup--shown");
                    return;
                }
            }
            popupAccept.classList.add("popup--shown");
        };

        btnFailure.onclick = function(event) {
            popupFailure.classList.remove("popup--shown");
        };

        btnAccept.onclick = function(event) {
            popupAccept.classList.remove("popup--shown");
        };

        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
                if (popup.classList.contains("popup--shown")) {
                    popup.classList.remove("popup--shown");
                }
            }
        });
    }

    //////////////// Google Maps ////////////////

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 59.939870, lng: 30.318591},
            scrollwheel: false,
            zoom: 16
        });
    }

})();
