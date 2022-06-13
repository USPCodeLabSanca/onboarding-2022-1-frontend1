//Formulário
let voluntários = []
let guardar = function() {
    let formulário = {
        nome: document.getElementById("nome").value,
        nascimento: document.getElementById("nascimento").value,
        sexomasculino: document.getElementById("masculino").value,
        sexofeminino: document.getElementById("feminino").value,
        CPF: document.getElementById("CPF").value,
        RG: document.getElementById("RG").value,
        expedição: document.getElementById("expedição").value,
        país: document.getElementById("país").value,
        expeditor: document.getElementById("expeditor").value,
        celular: document.getElementById("celular").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        endereço: document.getElementById("endereço").value,
        número: document.getElementById("número").value,
        complemento: document.getElementById("complemento").value,
        cidade: document.getElementById("cidade").value,
        CEP: document.getElementById("CEP").value,
        bairro: document.getElementById("bairro").value,
        aconselhamento: document.getElementById("aconselhamento").value,
        alfabetização: document.getElementById("alfabetização").value,
    }
    voluntários.push(formulário)
    console.log(voluntários)
}
