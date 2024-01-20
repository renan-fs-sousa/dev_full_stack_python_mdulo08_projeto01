const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    addLinha();
    updateTabela() 
});

function addLinha() {
    const inputNomeContato = document.getElementById('nome')
    const inputTelefoneContato = document.getElementById('telefone')

    if (contatos.includes(inputNomeContato.value)){
        alert('Erro: Já existe esse nome de contato');
        inputNomeContato.focus();
        inputNomeContato.style.outlineColor = 'red';
    }
    else if (telefones.includes(inputTelefoneContato.value)){
        alert('Erro: Já existe esse número de telefone');
        inputTelefoneContato.focus();
        inputTelefoneContato.style.outlineColor = 'red';
    }
    else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputTelefoneContato.value = ''
        inputTelefoneContato.style.outlineColor = '';
        inputNomeContato.style.outlineColor = '';
    }

};

function updateTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};