// Array e loop for
// Considere esse array para realizar os próximos exercícios.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let index = 0; index < numbers.length; index += 1) {
  let number = numbers[index];
  console.log(number);
}

// 2. Some todos os valores contidos no array e imprima o resultado.
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);

// 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
const media = result / numbers.length;
console.log(media);

// 4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (media > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}

// 5. Utilizando for, descubra o maior valor contido no array e imprima-o.
let bigsNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > bigsNumber) {
    bigsNumber = numbers[index];
  }
}
console.log(`O maior número é: ${bigsNumber}`);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let oddsNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddsNumber++;
  }
}
if (oddsNumber > 0) {
  console.log(oddsNumber);
} else {
  console.log('Nenhum valor ímpar encontrado');
}

// Desafio fatorial
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;

for (let index = fatorial - 1; index > 1; index -= 1) {
  fatorial *= index;
}
console.log(fatorial);

// Desafio de inverter palavra
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();

let word = 'Renato Rodrigues de Freitas';
let reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

// Desafio dos asteriscos
// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
}

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}

// Desafio da pirâmide de asteriscos
// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

let m = 5;
let symbols = '*';
let inputLines = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLines = inputLines + symbols;
  console.log(inputLines);
}

// Desafio dos asteriscos, parte 2
// Agora, inverta o lado do triângulo.

let x = 5;
let asterisck = '*';
let iLine = '';
let iPosition = x - 1;

for (let index = 0; index < x; index += 1) {
  for (let columnIndex = 0; columnIndex < x; columnIndex += 1) {
    if (columnIndex < iPosition) {
      iLine = iLine + ' ';
    } else {
      iLine = iLine + asterisck;
    }
  }
  console.log(iLine);
  iLine = '';
  iPosition -= 1;
}
