<<<<<<< HEAD
const boton = document.getElementById("mostrar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const frase = document.getElementById("frase").value;
  let vocales = "";

  for (let i = 0; i < frase.length; i++) {
    if (/[aeiou]/i.test(frase[i])) {
      vocales += frase[i] + ", ";
    }
  }

  if (vocales === "") {
    mensaje.innerHTML = "No hay vocales en la frase.";
  } else {
    mensaje.innerHTML = `Las vocales que aparecen son: ${vocales.slice(0, -2)}.`;
  }
=======
const boton = document.getElementById("mostrar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const frase = document.getElementById("frase").value;
  let vocales = "";

  for (let i = 0; i < frase.length; i++) {
    if (/[aeiou]/i.test(frase[i])) {
      vocales += frase[i] + ", ";
    }
  }

  if (vocales === "") {
    mensaje.innerHTML = "No hay vocales en la frase.";
  } else {
    mensaje.innerHTML = `Las vocales que aparecen son: ${vocales.slice(0, -2)}.`;
  }
>>>>>>> e3e03d6d160389a432aa1bf3714754a30a5074c5
});