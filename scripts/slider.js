// JavaScript-скрипт для перемикання слайдів та додавання другого iframe
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".iframe-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;
  let isMouseDown = false;

  function updateSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    prevBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.style.display =
      index === slides.length - 1 ? "none" : "inline-block";
  }

  function showNext() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      if (currentSlide === 1) {
        addSecondIframe();
      }
      updateSlide(currentSlide);
    }
  }

  function showPrev() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide(currentSlide);
    }
  }

  function addSecondIframe() {
    const iframeContainer = document.getElementById("iframe2");
    if (!iframeContainer.querySelector("iframe")) {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.453402815936!2d33.4749475767412!3d48.03487165830532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dae18f512bea99%3A0x61a07e535c317a34!2z0YPQuy4g0JzRg9GB0L7RgNCz0YHQutC-0LPQviwgMTksINCa0YDQuNCy0L7QuSDQoNC-0LMsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwLCA1MDAwMA!5e1!3m2!1sru!2sua!4v1748691752574!5m2!1suk!2sua";
      iframe.loading = "lazy";
      iframeContainer.appendChild(iframe);
    }
  }

  updateSlide(currentSlide);

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);
});
