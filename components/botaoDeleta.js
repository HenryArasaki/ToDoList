const BotaoDeleta = ()=>{
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add("delet-button")
    botaoDeleta.innerText = "deletar"

    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = (evento)=>{
    const botaoDeleta = evento.target
    const deletaTarefa = botaoDeleta.parentElement
    deletaTarefa.remove()
}

export default BotaoDeleta