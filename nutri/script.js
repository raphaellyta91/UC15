document.getElementById('botao').addEventListener('click', cadastrar)
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0]


function cadastrar(evento){
    evento.preventDefault()


    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const profissao = document.getElementById('profissao').value
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)


    const imc = (peso / (altura * altura)).toFixed(2)


    const linha = tabela.insertRow()

    linha.innerHTML = `
        <td>${nome}</td>
        <td>${nascimento}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${endereco}</td>
        <td>${profissao}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${imc}</td>
        <td>
            <button onclick="editar(this)">Editar</button>
            <button onclick="excluir(this)">Excluir</button>
        </td>
    `

    document.getElementById('form-cadastro').reset()
}


function excluir(elemento){
    const linha = elemento.parentElement.parentElement
    linha.remove()
}


function editar(elemento){
    const linha = elemento.parentElement.parentElement
    const celulas = linha.querySelectorAll('td')

    document.getElementById('nome').value = celulas[0].innerText
    document.getElementById('nascimento').value = celulas[1].innerText
    document.getElementById('email').value = celulas[2].innerText
    document.getElementById('telefone').value = celulas[3].innerText
    document.getElementById('endereco').value = celulas[4].innerText
    document.getElementById('profissao').value = celulas[5].innerText
    document.getElementById('altura').value = celulas[6].innerText
    document.getElementById('peso').value = celulas[7].innerText

    linha.remove()
}

document.getElementById('form-cadastro').addEventListener('keydown', function(evento){
    if(evento.key === 'Enter'){
        cadastrar(evento)
    }
})