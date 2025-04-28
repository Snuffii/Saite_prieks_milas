const menu_slide = document.querySelector("#menu_slide");
const showMenu = document.querySelector(".book");

menu_slide.addEventListener("click", () => {
  menu_slide.classList.toggle("active");
  showMenu.classList.toggle("visible");
});
