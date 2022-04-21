/* 
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F 
*/

const notas = {
    n1: parseInt(prompt("digite o primerio valor")),
    n2: parseInt(prompt("digite o segundo valor")),
    n3: parseInt(prompt("digite o terceiro valor")),
    n4: parseInt(prompt("digite o quarto valor"))
}

const calcularNota = (n1, n2, n3, n4) => {
    const totalNotas = n1 + n2 + n3 + n4;
    const media = Math.floor(totalNotas / 4);
    if (media >= 90){
        alert("voce e um aluno nota A")
    }
    else if (media >= 89){
        alert("voec e um aluno nota B")
    }
    else if (media >= 79){
        alert("voec e um aluno nota C")
    }
    else if (media >= 69){
        alert("voec e um aluno nota D")
    }
    else {
        alert("voce e um aluno nota F")
    }
    console.log(media)
}
calcularNota(notas.n1, notas.n2, notas.n3, notas.n4);