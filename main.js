
const botaoEnviar = document.querySelector('[botao-enviar]')



const input = document.querySelector("#tarefa")

const lista = document.querySelector('[ul]')

const atualizarLista = () => {
    const listinha = document.querySelectorAll('li')
    listinha.forEach((element) => {
        element.remove()

    })

    for (i = 0; i < localStorage.length; i++) {
        tarefinha = document.createElement('li')
        tarefinha.classList.add("tarefinha")
        tarefinha.innerText = localStorage.key(i)
        if (localStorage.getItem(localStorage.key(i)) == 'true') {
            tarefinha.classList.add('concluido')
        }
        lista.append(tarefinha)

        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.addEventListener("change", function () {
            if (checkBox.checked) {
                localStorage.setItem(checkBox.parentElement.textContent, 'true')
                checkBox.parentElement.classList.toggle('concluido')
            }
            if (!checkBox.checked) {
                localStorage.setItem(checkBox.parentElement.textContent, 'false')
                checkBox.parentElement.classList.toggle('concluido')
            }

        })
        tarefinha.append(checkBox)
        if (localStorage.getItem(checkBox.parentElement.innerText) == 'true') {
            checkBox.setAttribute('checked', 'true')
        }

        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerText = ""
        botaoDeleta.classList.add("botaoDeleta")
        tarefinha.append(botaoDeleta)
        const deletarTarefa = (event) => {
            const botao = event.target
            localStorage.removeItem(String(botao.parentElement.innerText).replace(/concluirdeletar/g, ''))
            botao.parentElement.remove()
        }
        botaoDeleta.addEventListener('click', deletarTarefa)
    }

}

atualizarLista()


const criarTarefa = (evento) => {
    evento.preventDefault()

    const inputText = input.value

    const tarefa = {
        task: inputText,
        completado: false
    }

    if (inputText != '') {

        localStorage.setItem(inputText, (tarefa.completado))

        input.value = ''

        atualizarLista()
    }

}



botaoEnviar.addEventListener('click', criarTarefa)