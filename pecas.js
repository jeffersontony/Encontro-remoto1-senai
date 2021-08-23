let ListaDePecas = ["Correia", "Bateria", "Motor"]

if(ListaDePecas.length < 10) {
   // É possível cadastrar peças
   console.log("É possível cadastrar mais peças");
} else {
   console.log("Não tem mias espaço na lista, impossivel cadastrar"); 
}

let peso = 160;

if (peso < 100) {
   console.log("A peça deve pesar no mínimo 100g")
} else {
   console.log("A peça possui peso adequado")
}

let namePeca = "Cambio";

if(namePeca.length > 3) {
   console.log("Nome da peça está adequado para cadastro!")
} else if(namePeca.length == 0) {
   console.log("O nome da peça não pode ser vazio.")
} else {
   console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
}

switch(namePeca.length) {
    case 0:
        console.log("O nome peça não pode ser vazio.")
        break;

        case 1:
        case 2:
        case 3:
            console.log("O nome deve ter mais de 3 caracteres.")
            break;

        default:
            console.log("Nome da peça está adequado para cadastro!")
            break;  
}
   
