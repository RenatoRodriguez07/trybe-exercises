// Manipulação de Arrays.
const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];
// Verificando a posição do array.
console.log(shoppingList[0]);
// Salvando um elemento array em uma constante ou variavel.
const item = shoppingList[1];

console.log(item);
// Modificando o valor do elemento em um array.
shoppingList[1] = 'suco de caju';

console.log(shoppingList);

// push() Adiciona um elemento no final do array.
shoppingList.push('Cotonetes');
console.log(shoppingList);

// unshift() Adiciona um elemento no começo do array.
shoppingList.unshift('Água de Coco');
console.log(shoppingList);

// pop() Remove o ultimo elemento do array.
shoppingList.pop();
console.log(shoppingList);

// shift() Remove o primeiro elemento do array.
shoppingList.shift();
console.log(shoppingList);

// Tamanho do array
console.log(shoppingList.length);
