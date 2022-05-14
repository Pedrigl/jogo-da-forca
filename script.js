
function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var palavras = ['teste', 'raio', 'notebook'];
var letras = palavras.length;
var tamanho = palavras[0].length;


console.log(aleatorio(1,letras));