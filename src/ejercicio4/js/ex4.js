<<<<<<< HEAD
const boton = document.getElementById("sumar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  const resultado = numero1 + numero2;
  mensaje.innerHTML = `La suma de ${numero1} con ${numero2} es ${resultado}.`;
=======
const boton = document.getElementById("sumar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  const resultado = numero1 + numero2;
  mensaje.innerHTML = `La suma de ${numero1} con ${numero2} es ${resultado}.`;
>>>>>>> e3e03d6d160389a432aa1bf3714754a30a5074c5
});