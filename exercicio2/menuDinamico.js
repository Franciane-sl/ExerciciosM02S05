const menu = [ "Home", "Sobre", "Contato"];

const menuDinamicoConteiner = document.getElementById("menuDinamico");

const lista = document.createElement("ul");

menu.forEach(menu => {
    const itemMenu = document.createElement("li");
    itemMenu.classList.add("itemMenu");

    const titulo = document.createElement("h2");
    titulo.textContent = menu;

    itemMenu.appendChild(titulo);
    lista.appendChild(itemMenu);
})

menuDinamicoConteiner.appendChild(lista);