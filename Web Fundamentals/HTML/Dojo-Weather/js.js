// دالة تحويل من °C إلى °F
function cToF(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

document.addEventListener("DOMContentLoaded", function () {
  const cityButtons = document.querySelectorAll(".city-btn");
  const cityTitle = document.getElementById("cityTitle");
  const unitSelect = document.getElementById("unitSelect");
  const acceptBtn = document.getElementById("acceptCookies");
  const cookieBar = document.getElementById("cookieBar");

  // إخفاء شريط الكوكيز عند الضغط على Accept
  acceptBtn.addEventListener("click", function () {
    cookieBar.style.display = "none";
  });

  // عند اختيار مدينة
  cityButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const cityName = btn.getAttribute("data-city");
      alert("Loading weather report...");
      cityTitle.textContent = cityName;
    });
  });

  // عند تغيير وحدة الحرارة
  unitSelect.addEventListener("change", function () {
    const unit = unitSelect.value;
    const highs = document.querySelectorAll(".temp-high");
    const lows = document.querySelectorAll(".temp-low");

    function updateTemps(nodeList) {
      nodeList.forEach(function (el) {
        const c = parseFloat(el.getAttribute("data-celsius"));
        if (unit === "c") {
          el.textContent = Math.round(c) + "°";
        } else {
          el.textContent = cToF(c) + "°";
        }
      });
    }

    updateTemps(highs);
    updateTemps(lows);
  });

  // تشغيل التحويل عند تحميل الصفحة
  unitSelect.dispatchEvent(new Event("change"));
});
