const boton = document.getElementById("comparar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  let mayor;

  if (numero1 > numero2) {
    mayor = numero1;
  } else if (numero2 > numero1) {
    mayor = numero2;
  } else {
    mayor = "Los números son iguales.";
  }

  mensaje.innerHTML = `El número mayor es ${mayor}.`;
});