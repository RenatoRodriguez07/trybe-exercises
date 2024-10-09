// Funções
// Exemplos de funções
function giveGreeting() {
  return `Olá, boas-vindas à Trybe!`;
}

console.log(giveGreeting()); // Olá, boas-vindas à Trybe!

// Funções com parâmetros
// Agora vamos a um exemplo de uso de função que retorna a soma de dois números:
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 8));

// Para fixar, parte 1
// Desenvolva o exercício a seguir com o uso de funções.

// Considere a variável balance, que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções que:
const balance = 10000;

// Adiciona um valor ao balance;
function adcBalance(value) {
  return value + balance;
}
console.log(adcBalance(5000));

// Subtraia um valor do balance;
function subBalance(value) {
  return balance - value;
}
console.log(subBalance(2000));

// Multiplique o valor do balance por uma taxa;
function taxBalance(value) {
  return balance * value;
}
console.log(taxBalance(10));

// Divida o valor do balance.
function divisionBalance(value) {
  return balance / value;
}
console.log(divisionBalance(100));

// Para fixar, parte 2
// 1. Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(customer) {
  if (typeof customer != 'string') {
    return 'O parâmetro passado deve ser do tipo string';
  }

  trybeBankCustomers.push(customer);
  return 'pessoa adicionada com sucesso!';
}
// console.log(addCustomer('renato'));
// console.log(trybeBankCustomers);

// 2. Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
// Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
// Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”.

let newCustumers = ['Renato', 'Ana'];

function addCustomers(array, newArray) {
  for (let index = 0; index < newArray.length; index += 1) {
    const element = newArray[index];
    if (typeof element != 'string') {
      return 'Todos os valores precisam ser strings.';
    }
  }
  array.push(...newArray);
  return 'Pessoas adicionadas com sucesso.';
}
console.log(addCustomers(trybeBankCustomers, newCustumers));
console.log(trybeBankCustomers);

// GABARITO
// function addCustomers(customer, newCustumers) {
//   for (let index = 0; index < newCustumers.length; index += 1) {
//     if (typeof newCustumers[index] === 'string') {
//       customer.push(newCustumers[index]);
//     } else {
//       return 'Todos os valores precisam ser strings.';
//     }
//   }
//   return trybeBankCustomers;
// }
// console.log(addCustomers(trybeBankCustomers, ['renato', 'ana']));
// console.log(addCustomer(trybeBankCustomers, ['Renato', 10]));
