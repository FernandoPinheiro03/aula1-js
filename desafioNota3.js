//let nota1 = window.prompt('Digite o primeiro valor:');
//let nota2 = window.prompt('Digite o segundo valor:');

let nota1 = parseInt(window.prompt('Digite o primeiro valor:'));
let nota2 = parseInt(window.prompt('Digite o segundo valor:'));

let media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log("A média foi: " + media)
    console.log("-----APROVADO------")
}

else if (media >=6 && media <= 6.9) {
    console.log("A média foi: " + media)
    console.log("-----RECUPERAÇÃO------")
}

else {
    console.log("A média foi:" + media)
    console.log("----REPROVADO-----")
}