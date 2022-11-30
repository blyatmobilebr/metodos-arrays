const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function agendar(lista, tipoOperacao, nomePaciente) {
    if (tipoOperacao === "agendar") lista.push(nomePaciente);

    return lista.join(", ");
}

function atender(lista, tipoOperacao, _nomePaciente) {
    if (tipoOperacao === "atender") lista.shift();

    return lista.join(", ");
}

function cancelar(lista, tipoOperacao, nomePaciente) {
    if (tipoOperacao === "cancelar") return lista.filter(nome => nome !== nomePaciente).join(", ")

}

console.log(atender(pacientes, "atender"));
console.log(agendar(pacientes, "agendar", "João"));
console.log(cancelar(pacientes, "cancelar", "João"));