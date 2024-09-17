// EXEMPLOS DE VARIAVEIS
if (true) {
  // Início do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // Fim do escopo do if
}

console.log(userAge); // 20

var userName = 'Isabella';
console.log(userName); // Isabella

var userName = 'Lucas';
console.log(userName); // Lucas

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';

console.log(favoriteTechnology); 
// Facial recognition

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';

console.log(favoriteLanguage); 
// TypeError: Assignment to constant variable.

let patientId = '50';
let isEnrolled = true;
let patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientEmail);
console.log(typeof patientAge);

// PARA FIXAR 
// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina);
const myName = 'Renato Rodrigues de Freitas';

// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
const birthCity = 'Fortaleza';

// Crie uma constante chamada birthYear e atribua a ela o ano em que você nasceu;
const birthYear = 1994;

// Utilize o console.log() para imprimir as variáveis que você criou.
console.log(myName);
console.log(birthCity);
console.log(birthYear);
