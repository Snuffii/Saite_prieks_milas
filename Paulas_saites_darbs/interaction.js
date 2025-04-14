const menu_slide = document.querySelector("#menu_slide");
const showMenu = document.querySelector(".book");
const mainText = document.querySelector("#whole_book");

menu_slide.addEventListener("click", () => {
    menu_slide.classList.toggle("active");
    showMenu.classList.toggle("visible");

    if (showMenu.classList.contains("visible")) {
        mainText.style.marginLeft = "calc(10vw + 150px + 30px)";
    } else {
        mainText.style.marginLeft = "10vw";
    }
});
