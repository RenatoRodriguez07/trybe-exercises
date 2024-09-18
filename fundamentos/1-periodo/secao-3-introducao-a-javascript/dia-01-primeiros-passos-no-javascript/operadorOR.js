// EXEMPLOS 1

const principalDrink = 'café';
const alternativeDrink = 'suco de laranja';

if (principalDrink === 'café' || alternativeDrink === 'suco de laranja') {
  console.log("Agradeço por me atender :D");
} else {
  console.log("Ei, não foi isso que eu pedi!");
}

// EXEMPLO 2

const goToSP = false;
const goToGO = false;

if ((goToSP === true && goToGO === false) || (goToSP === false && goToGO === true)) {
  console.log('Eu fui para apenas um dos lugares.');
} else {
  console.log('Eu fui para os dois, ou para nenhum.');
}