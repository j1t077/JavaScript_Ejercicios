function contarVocales() {
    var frase1 = document.getElementById("frase").value;
    var numVocales = 0;
    for (var i = 0; i < frase1.length; i++) {
        if (/[aeiouáéíóú]/i.test(frase1.charAt(i))) {
            numVocales++;
        }
    }
    document.getElementById("resultado").innerHTML = "La frase introducida tiene " + numVocales + " vocales.";
}