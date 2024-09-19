// Exercício 1

// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:
let num1 = 10;
let num2 = 5;
// Adição (num1 + num2)
const add = num1 + num2;
console.log(add);

// Subtração (num1 - num2)
const sub = num1 - num2;
console.log(sub);

// Multiplicação (num1 * num2)
const multi = num1 * num2;
console.log(multi);

// Divisão (num1 / num2)
const division = num1 / num2;
console.log(division);

// Módulo (num1 % num2)
const modulo = num1 % num2;
console.log(modulo);

// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

const number1 = 16;
const number2 = 15;

if (number1 > number2) {
  console.log(number1 + ' é maior que ' + number2);
} else if (number1 === number2) {
  console.log('Os números são iguais.');
} else {
  console.log(number2 + ' é maior que ' + number1);
}

// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

const number3 = 10;
const number4 = 5;
const number5 = 10;

if (number3 > number4 && number3 > number5) {
  console.log(number3 + ' é o maior número!');
} else if (number4 > number3 && number4 > number5) {
  console.log(number4 + ' é o maior número!');
} else if (number5 > number3 && number5 > number4) {
  console.log(number5 + ' é o maior número!');
} else {
  console.log('IIHH, tem números iguais!');
}

// Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

const angle1 = 65;
const angle2 = 45;
const angle3 = 70;
const sumOfAllAngles = angle1 + angle2 + angle3;
const allAnglesArePositives = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (allAnglesArePositives) {
  if (sumOfAllAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro: ângulo inválido!');
}

// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Atenção ⚠️: não sabe o que é switch/case? Reveja a aula pois pode ter passado despercebido ☺️. Caso queira se aventurar na aprendizagem do switch/case através da documentação, tem um link muito bom te esperando na lição de Recursos Adicionais. Por fim, você terá mais oportunidades de sedimentar o conhecimento sobre a estrutura condicional switch/case ao longo da formação! Agora, só queremos dar visibilidade que existem outras ferramentas para fazer operações condicionais, ok?

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

let chessPiece = 'queen';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log(
      'O rei se move em todas as direções (diagonal, vertical, horizontal), mas somente 1 casa por vez.'
    );
    break;

  case 'rainha':
    console.log(
      'A rainha se move em todas as direções (diagonal, vertical, horizontal) quantas casas quiser, desde que o caminho esteja livre.'
    );
    break;

  case 'torre':
    console.log(
      'A torre se move em duas direções (horizontal e vertical) quantas casas quiser, desde que o caminho esteja livre.'
    );
    break;

  case 'bispo':
    console.log(
      'O bispo se move na diagonal, quantas casas quiser, desde que o caminho esteja livre.'
    );
    break;

  case 'cavalo':
    console.log(
      "O cavalo se move em 'L', sendo 2 casas em uma direção (horizontal ou vertical) e 1 casa em angulo reto. Ele é a unica peça que pode pular outra peça."
    );
    break;

  case 'peão':
    console.log(
      'O peão se move uma casa para frente (ou duas se for o seu primeiro movimento), e captura na diagonal.'
    );
    break;

  default:
    console.log(
      'Peça invalida. Por favor, digite uma peça valida (king, queen, tower, bishop, horse e pawn)'
    );
    break;
}

// Exercício 6: Há um par entre nós
// 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

const num3 = 3;
const num4 = 4;
const num5 = 5;

let isEven = false;

if (num3 % 2 === 0 || num4 % 2 === 0 || num5 % 2 === 0) {
  isEven = true;
}

console.log(isEven);

// Exercício 7
// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

// Para as faixas de impostos, use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

// 👀 Dica: Que tal identificar as alíquotas com variáveis de nomes explicativos?

let aliquotINSS;
let aliquotIR;

const grossSalary = 3000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.8;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.8;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
}

let liquidSalary = baseSalary - aliquotIR;

console.log('Salário é R$' + liquidSalary);
