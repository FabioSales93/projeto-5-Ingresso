//aqui a ia otimizou meu codigo
function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidade = parseInt(document.getElementById("qtd").value);

    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Por favor, insira uma quantidade válida e positiva.");
        return;
    }

    const ingressos = {
        pista: document.getElementById("qtd-pista"),
        superior: document.getElementById("qtd-superior"),
        inferior: document.getElementById("qtd-inferior")
    };

    const quantidadeDisponivel = parseInt(ingressos[tipoIngresso].textContent);

    if (quantidadeDisponivel <= 0 || (quantidadeDisponivel - quantidade) < 0) {
        alert("Indisponível");
        return;
    }

    ingressos[tipoIngresso].textContent = quantidadeDisponivel - quantidade
    alert("compra efetuada");
}


//parte que eu fiz funcional
// function comprar(){
//     let tipoIngresso = document.getElementById("tipo-ingresso").value;
//     let quantidade = parseInt(document.getElementById("qtd").value);

//     let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
//     let quantidadeSuperior = parseInt(document.getElementById("qtd-superior").textContent);
//     let quantidadeInferior = parseInt(document.getElementById("qtd-inferior").textContent);


//     if (tipoIngresso ==="pista"){
//         if(quantidadePista <= 0){
//             alert("indisponivel");
//             return;}
//         quantidadePista = quantidadePista - quantidade;
//         if (quantidadePista < 0){
//             alert("indisponivel")
//             return;}
//         document.getElementById("qtd-pista").textContent = quantidadePista;


//     } else if (tipoIngresso === "superior"){
//         if(quantidadeSuperior <= 0){
//             alert("indisponivel");
//             return;}
//         quantidadeSuperior = quantidadeSuperior - quantidade;
//         if (quantidadeSuperior < 0){
//             alert("indisponivel")
//             return;}
//         document.getElementById("qtd-superior").textContent = quantidadeSuperior;


//     } else if (tipoIngresso === "inferior"){
//         if(quantidadeInferior <= 0){
//             alert("indisponivel");
//             return;}
//         quantidadeInferior = quantidadeInferior - quantidade;
//         if (quantidadeInferior < 0){
//             alert("indisponivel")
//             return;}
//         document.getElementById("qtd-inferior").textContent = quantidadeInferior;
//     }

//     }
