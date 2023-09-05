const header = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 40) {
    header.classList.add("fixed");
  }
});
