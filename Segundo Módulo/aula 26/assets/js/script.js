const input = document.querySelector('#input-nova-tarefa');
const button = document.querySelector('#btn-add-tarefa');
const tarefas = document.querySelector('#tarefas');

input.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (!input.value) return;
        const tarefa = criaTarefa(input.value)
        adicionaLi(tarefa);
    }
});

function criali() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criali();
    li.innerText = textoInput;
    criaBotaoApagar(li);
    limpaINPT();
    return li;
}

function adicionaLi(li) {
    tarefas.appendChild(li);
}

function limpaINPT(){
    input.value = '';
    input.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('id', 'apagar');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}



button.addEventListener('click', function (event) {
    if (!input.value) return;
    const tarefa = criaTarefa(input.value)
    adicionaLi(tarefa);
    
});

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.id === 'apagar'){
        el.parentElement.remove();
    }
})