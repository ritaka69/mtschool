// JavaScript-скрипт для обробки экрану завантаження
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2500);
});
