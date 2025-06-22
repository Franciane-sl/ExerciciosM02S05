const formulario = document.getElementById("formularioTarefa");
const input = document.getElementById("tarefas");
const tarefa = document.getElementById("listaTarefas");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const texto = input.value.trim();

    if(texto!==""){
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = texto;
        tarefa.appendChild(novaTarefa);
        input.value = "";
        input.focus();
    }
})