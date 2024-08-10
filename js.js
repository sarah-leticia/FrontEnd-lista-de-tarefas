
const valor_input = document.querySelector(".input");
const BotaoAddTarefa = document.querySelector(".button");
const ListaTarefa = document.querySelector(".tarefa");
const ListaDeTarefas = document.querySelector(".tarefa");

const validarElemento = () => valor_input.value.trim().length > 0; // validação do input

//função de validação
const validacao = () => {
    const statusElemento = validarElemento(); // validação do elemento

    if(!statusElemento){
        alert("Por favor, digite a tarefa.");
      
    }
   else {
    AddNovaTarefa();
      valor_input.value =""; //limpa a caixa de entrada de texto após o novo elemento ser inserido.
    }
};

//função adicionat tarefa 
const AddNovaTarefa = () => {
    const novaTarefa = document.createElement("LI"); //cria o novo elemento com a tag <li>
    novaTarefa.classList.add("item");
    novaTarefa.innerHTML = valor_input.value;
    ListaTarefa.appendChild(novaTarefa);

    const BotaoRemoveSpan = document.createElement("span"); //cria o novo elemento com a tag <span>
    BotaoRemoveSpan.innerHTML="\u00d7" 
    novaTarefa.appendChild(BotaoRemoveSpan);

};

//Evento: percore os itens dentro da lista de tarefas <ul>
ListaDeTarefas.addEventListener("click", function(parametro) {
    if(parametro.target.tagName === "LI"){ //compara a tag <li> se for true risca a tarefa com checked
        parametro.target.classList.toggle("checked"); 
    }
    else if(parametro.target.tagName === "SPAN"){ //compara a tag e remove o elemento
        parametro.target.parentElement.remove();
    }
}, false);

//evento para chamar a função de validação
BotaoAddTarefa.addEventListener("click", () => validacao());


