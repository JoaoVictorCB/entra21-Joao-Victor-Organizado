/* Exercício 1 */


function limpaAnagramas1(vetor) {
    let vetor1 = []
    let vetorFinal = []
    for (item of vetor) {
        vetor1.push(((Array.from(item).sort()).join('')))
    } 
    for (item of vetor1){
        vetorFinal.push(item)
    };
    let clearVetor = new Set(vetorFinal)
    return Array.from(clearVetor)
}

console.log(limpaAnagramas1(["ova", "pato", "apto", "teste", "mercado", "avo"]))