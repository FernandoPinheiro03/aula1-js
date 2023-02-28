let nota1 = 6.5
let nota2 = 6.5
let media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log("A média do aluno foi " + media)
    console.log("----APROVADO----")
}

else if (media >= 6 && media <= 6.9) {
    console.log("A média do aluno foi " + media)
    console.log("---RECUPERAÇÃO-----")
} else {
    console.log("A média do aluno foi " + media)
    console.log("----REPROVADO-----")
}

