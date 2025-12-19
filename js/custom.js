
AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});

const select = document.getElementById("stateSelect");

  select.addEventListener("change", function () {
    if (this.value) {
      this.classList.add("selected");
    } else {
      this.classList.remove("selected");
    }
  });

// document.querySelector(".search-toggle").addEventListener("click", function () {
//   this.closest(".search-wrap").classList.toggle("active");
// });
