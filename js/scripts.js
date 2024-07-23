//função que adiciona tarefa
function addTask(){
    //pagar o título da tarefa, usa id do input, .value pq pega o valor do input
    const tasktitle = document.querySelector("#task-title").value;
    // faz uma validação, se tiver tarefa ou task-title prossegue, se não, não faz nada, evita cadastrar tarefa com titulo vazio
    if(tasktitle){
        //clonar template
        const template = document.querySelector(".template");
        //newTask é a variável nova tarefa, a funçao cloneNode clona o html em uma variável
        const newTask = template.cloneNode(true);
        
        //adiciona título
        newTask.querySelector(".task-title").textContent = tasktitle;

        //remover as classes desnecessárias: template e hide
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona tarefa na lista, primeiro tem que selecionar a lista, usa id da ul, depois faz append no newTask
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //para remover um evento
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this); //this referencia que aquela tarefa deve ser removida
        })

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this); //this para confirmar aquela tarefa em específico
        })

        //limpar texto que foi digitado no input, após ter sido adicionado
        document.querySelector("#task-title").value = "";

    }
}
// função de remover tarefa
function removeTask(task){  //task é a tarefa
    task.parentNode.remove(true); //remove o elemento pai que é li da lista de tarefas
}

// função de confirmar que a tarefa foi realizada
function completeTask(task){
    const taskToComplete = task.parentNode; //achar o elemento pai e trocar a classe dele
    taskToComplete.classList.toggle("done"); //acessar o classList e com o toggle pode altenar entre dois estados, se tiver com done tira, se não tiver coloca
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();   //não envia o formulario, fica esperando ação do js
    addTask();
});