// Convertendo uma function em arrow function

// function subtraction(num1, num2) {
//   return num1 - num2;
// }

// Passo 1: Arrow functions não possuem nome e são armazenadas em variáveis

// const subtraction = (num1, num2) {
//   return num1 - num2;
// }

// Passo 2: Colocando a seta na arrow function =>

// const subtraction = (num1, num2) => {
//   return num1 - num2;
// };

// console.log(subtraction(100, 30));

// Passo 3: Simplificando arrow functions que possuem apenas 1 linha
// Primeira ação pra simplificar: coloque tudo na mesma linha

// const subtraction = (num1, num2) => { return num1 - num2 };

// Segunda ação pra simplificar: remova as chaves
// Da erro por conta do 'return' que é um stateman e é obrigatório ser uma expressão (expression)

// const subtraction = (num1, num2) => return num1 - num2;

// Terceira ação pra simplificar: remova o return

const subtraction = (num1, num2) => num1 - num2;

console.log(subtraction(100, 30));
