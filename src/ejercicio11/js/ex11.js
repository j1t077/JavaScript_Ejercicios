function comprobarDivisible() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    
    if (numero % 2 === 0) {
      resultado.innerHTML = numero + " es divisible por 2";
    } else if (numero % 3 === 0) {
      resultado.innerHTML = numero + " es divisible por 3";
    } else if (numero % 5 === 0) {
      resultado.innerHTML = numero + " es divisible por 5";
    } else if (numero % 7 === 0) {
      resultado.innerHTML = numero + " es divisible por 7";
    } else {
      resultado.innerHTML = numero + " no es divisible por 2, 3, 5 ni 7";
    }
  }