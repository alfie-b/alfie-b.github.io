// Softscroll
$("#main-nav ul li a[href^='#']").on("click", function(e) {
  e.preventDefault();
  var hash = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    300,
    function() {
      window.location.hash = hash;
    }
  );
});

// Scrollspy settings
var offset = 125;
$(".navbar li a").click(function(event) {
  event.preventDefault();
  $($(this).attr("href"))[0].scrollIntoView();
  scrollBy(0, -offset);
});

// Map
var penicuik = { lat: 55.83098, lng: -3.22504 };
var mapOptions = {
  center: penicuik,
  zoom: 9,
  disableDefaultUI: true
};
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({ position: penicuik, map: map });
}

// Form validation
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
