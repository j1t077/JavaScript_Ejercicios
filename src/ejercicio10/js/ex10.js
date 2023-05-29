const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const frase = document.querySelector('#frase').value.toLowerCase();
  const vocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };
  for (let letra of frase) {
    if (vocales.hasOwnProperty(letra)) {
      vocales[letra]++;
    }
  }
  let mensaje = '';
  for (let vocal in vocales) {
    mensaje += `${vocal}: ${vocales[vocal]} veces\n`;
  }
  resultado.textContent = mensaje;
});