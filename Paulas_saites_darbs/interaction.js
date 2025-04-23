const menu_slide = document.querySelector("#menu_slide");
const showMenu = document.querySelector(".book");


menu_slide.addEventListener("click", () => {
    menu_slide.classList.toggle("active");
    showMenu.classList.toggle("visible");
});

document.querySelectorAll(".page").forEach(page => {
    const url = page.dataset.page;
    fetch(url)
        .then(res => res.text())
        .then(html => {
            page.innerHTML = html;
        });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".book_page a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const pageNumber = parseInt(link.dataset.page);
            $("#flipbook").turn("page", pageNumber);
        });
    });
});

document.querySelectorAll(".page").forEach(page => {
    const url = page.dataset.page;
    fetch(url)
        .then(res => res.text())
        .then(html => {
            page.innerHTML = html;

            // Add event listeners for page-turning links inside this dynamically loaded page
            page.querySelectorAll("a[data-page]").forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const pageNumber = parseInt(link.dataset.page);
                    if (!isNaN(pageNumber)) {
                        $("#flipbook").turn("page", pageNumber);
                    }
                });
            });
        });
});


