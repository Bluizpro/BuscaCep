'use string';

const limparFormulario = (endereco) =>{   
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
} 

    const preecherFormulario = (endereco) =>{        
        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;



    } 
    const eNumero = (numero)=> /^[0-9]+$/.test(numero); 
    const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() =>{
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
    const dados = await fetch(url);
    const endereco = await dados.json();
   if (endereco.hasOwnProperty("erro")){
        document.getElementById('endereco').value = 'Cep Não Encontrado !';
}else{
    preecherFormulario(endereco);

}
}else{
    document.getElementById('endereco').value = 'Cep incorreto !';
}
}
document.getElementById('cep')
.addEventListener('focusout', pesquisarCep);
