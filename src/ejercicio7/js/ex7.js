const boton = document.getElementById("contar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const frase = document.getElementById("frase").value;
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === "a" || frase[i] === "A") {
      contador++;
    }
  }

  mensaje.innerHTML = `La letra "a" aparece ${contador} veces en la frase.`;
});