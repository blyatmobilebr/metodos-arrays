const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function fila(lista, tipoOperacao, nomePaciente) {
    if (tipoOperacao === "agendar") { 
        lista.push(nomePaciente);
    }
    else if (tipoOperacao === "atender") lista.shift();

    return lista.join(", ");
}


console.log(fila(pacientes, "agendar", "Miau"));