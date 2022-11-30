const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanho = 4;
let segundoArray = [];


function divisaoEmGrupos(array, tamanho) {
    if (array.length === tamanho) console.log(nomes)
else if (array.length > tamanho) {
    for (let contador = 0; contador < tamanho; contador++) {
        segundoArray.push(array.shift());
    }

    console.log(`Primeiro grupo: ${segundoArray}\nSegundo grupo: ${nomes}`);
}
}


divisaoEmGrupos(nomes, 3)