const botaoDropdown = document.querySelector("#btn");
const menu = document.querySelector("#menu");

botaoDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
})

document.addEventListener("click", (e) => {
    if (!botaoDropdown.contains(e.target) && !menu.contains(e.target)){
        menu.style.display = "none";
    }
})