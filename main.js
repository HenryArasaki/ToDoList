
const botaoEnviar = document.querySelector('[botao-enviar]')



const input = document.querySelector("#tarefa")

const lista = document.querySelector('[ul]')

const atualizarLista = () => {
    const listinha = document.querySelectorAll('li')
    listinha.forEach((element)=>{
        element.remove()
        console.log('removido')
    })

    for(i=0;i<localStorage.length;i++){
        tarefinha = document.createElement('li')
        tarefinha.innerText = localStorage.key(i)
        if (localStorage.getItem(localStorage.key(i)) == 'true'){
            tarefinha.classList.add('concluido')
        }
        lista.append(tarefinha)

        const checkBox = document.createElement('input')
        checkBox.setAttribute('type','checkbox')
        tarefinha.append(checkBox)
        // const botaoConclui = document.createElement('button')
        // botaoConclui.innerText = "concluir"
        // tarefinha.append(botaoConclui)
    
        // // const concluirTarefa = (event) => {
        // //     const botao = event.target
        // //     botao.parentElement.classList.toggle('concluido')
        // //     if(botao.parentElement.innerText.replace((/concluirdeletar/g),'') == 'true'){
        // //         localStorage.setItem(botao.parentElement.innerText.replace((/concluirdeletar/g),''), 'false')
        // //         atualizarLista()
        // //     }
        // //     else{
        // //         localStorage.setItem((botao.parentElement.innerText.replace((/concluirdeletar/g),'')), 'true')
        // //         atualizarLista()
        // //     }
        // // }
        // // botaoConclui.addEventListener('click', concluirTarefa)
    
        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerText = "deletar"
        tarefinha.append(botaoDeleta)
        const deletarTarefa = (event)=>{
            const botao = event.target
            localStorage.removeItem(String(botao.parentElement.innerText).replace(/concluirdeletar/g,''))
            botao.parentElement.remove()
        }
        botaoDeleta.addEventListener('click',deletarTarefa)
    }
///
    
}

atualizarLista()


const criarTarefa = (evento) => {
    evento.preventDefault()

    const inputText = input.value

    const tarefa = {
        task: inputText,
        completado: false
    }



    localStorage.setItem( inputText, (tarefa.completado))

    input.value = ''

    atualizarLista()
}



botaoEnviar.addEventListener('click', criarTarefa)