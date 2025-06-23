const contadorZerado = document.getElementById("contador")
const adicionar = document.getElementById("adicionar")
const subtrair = document.getElementById("subtrair")
const zerar = document.getElementById("zerar")

let contador = 0;

function atualizarContador() {
    contadorZerado.textContent = contador; 
}

adicionar.addEventListener("click", () => {
    contador++;
    atualizarContador();
})

subtrair.addEventListener("click", () => {
    contador--;
    atualizarContador();
})

zerar.addEventListener("click", () => {
    contador = 0;
    atualizarContador();
})

