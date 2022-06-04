const burger = document.querySelector(".burger1");
const list = document.querySelector(".menu__list");

burger.addEventListener("click", function() {
    burger.classList.toggle("burger_active");
    list.classList.toggle("menu__list-active");
});