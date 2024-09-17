// EXEMPLOS DE CONDIÇÕES IF...ELSE
const age = 87;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}

// OPERADOR TERNARIO

// SEM OPERADOR TERNARIO
const personAge = 17;
let canVote;

if (personAge >= 16) {
  canVote = 'Pode votar!';
} else {
  canVote = 'Não pode votar!';
}

console.log(canVote); // Pode votar!

// COM OPERADOR TERNARIO
const personAge1 = 17;
let canVote1 = personAge1 >= 16 ? 'Pode votar!': 'Não pode votar!';

// PARA FIXAR
const grade = 100;

if (grade >= 80 && grade <= 100) {
  message = 'Parabéns, você faz parte do grupo de pessoas aprovadas!';
} else if (grade >= 60 && grade < 80) {
  message = 'Você está na nossa lista de espera.';
} else if (grade >= 0 && grade < 60) {
  message = 'Infelizmente, você reprovou.';
} else {
  message = 'Não se aplica.';
}

console.log(message);
