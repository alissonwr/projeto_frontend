const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const main = document.querySelector("main")

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
    main.classList.toggle("main-active");
})