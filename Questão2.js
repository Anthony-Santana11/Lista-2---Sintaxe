function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}
const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Carlos', idade: 28 },
];
const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);

