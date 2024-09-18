// EXEMPLOS
const food = 'pão';
const drink = 'café';

if (drink === 'café' && food === 'pão') {
  console.log('Obrigado!');
} else {
  console.log('Erraram meu pedido.');
}

let carrot = true;
let milk = true;
let rice = true;
let bean = true;

let listaDeCompras = carrot && milk && rice && bean;

console.log(listaDeCompras);

var currentHour = 5;
var message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado';
}

console.log(message);