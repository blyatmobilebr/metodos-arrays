const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]


function encontrarPet(nomeDoPet, array) {
    array.forEach(objeto => {
        const {nome, pets} = objeto;

        if(pets.includes(nomeDoPet)) console.log(`O dono(a) do(a) ${nomeDoPet} é o(a) ${nome}.`)
        else { 
            console.log(`Que pena ${nomeDoPet}, não encontramos o seu dono(a).`);
        }

    });
}

encontrarPet("Piu", usuarios)