document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    function showSlide(index) {
      // 全てのスライドを非表示にする
      slides.forEach(slide => slide.classList.remove("active"));

      // 指定したスライドを表示
      slides[index].classList.add("active");
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }

    // 10秒ごとにスライドを切り替える
    setInterval(nextSlide, 10000);

    // 最初のスライドを表示
    showSlide(currentSlideIndex);
});
