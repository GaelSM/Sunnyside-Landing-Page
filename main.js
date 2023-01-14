document.querySelector("#menu__icon").addEventListener("click", () => {
  document.querySelector(".mobile__menu").classList.toggle("active");
});

document.querySelector(".arrow-down").addEventListener("click", () => {
  scrollTo(0, document.querySelector("header").scrollHeight);
});
