document.addEventListener("DOMContentLoaded", function() {
  var cards = document.querySelectorAll(".cards");

  function checkVisibility() {
    cards.forEach(function(card) {
      var bounding = card.getBoundingClientRect();
      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  
  checkVisibility();
});