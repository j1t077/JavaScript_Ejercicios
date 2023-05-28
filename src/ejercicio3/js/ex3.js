const boton = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  mensaje.innerHTML = `Hola ${nombre}!`;
});
