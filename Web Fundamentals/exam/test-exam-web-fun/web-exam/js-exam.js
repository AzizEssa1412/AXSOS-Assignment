$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    // Adjust the scroll threshold as needed
    $("top").css("background-color", "#e64242ff"); // Change to desired color
  } else {
    $("top").css("background-color", "transparent");
  }
});

var ctaBtn = document.getElementById("ctaBtn");
if (ctaBtn) {
  ctaBtn.addEventListener("mouseover", function () {
    ctaBtn.style.backgroundColor = "#d88314ff";
  });
  ctaBtn.addEventListener("mouseout", function () {
    ctaBtn.style.backgroundColor = "#1a9735ff";
  });
}
