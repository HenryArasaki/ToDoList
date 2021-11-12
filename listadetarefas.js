import BotaoConclui from "./components/botaoconclui.js"
import BotaoDeleta from "./components/botaoDeleta.js"

    const criarTarefa = (event) => {
        event.preventDefault()
        const input= document.querySelector("[data-form-input]")
        const valor = input.value

        const lista = document.querySelector("[data-list]")
        
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>`

        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        
        input.value = ''     
    }

const novaTarefa = document.querySelector("[data-form-button]")

novaTarefa.addEventListener('click', criarTarefa)


