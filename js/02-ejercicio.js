const numero = parseInt(prompt("Introduce un número del 0 al 10:"));

if (numero >= 0 && numero <= 2) {
  alert("La calificacion es muy deficiente");
} else if (numero >= 3 && numero <= 4) {
    alert("La calificacion es insuficiente");
} else if (numero >= 5 && numero <= 6) {
    alert("La calificacion es suficiente");
} else if (numero == 7) {
    alert("La calificacion es buena");
} else if (numero >= 8 && numero <= 9) {
    alert("La calificacion es notable");
} else if (numero == 10) {
    alert("Lograste un sobresaliente, felicidades!!!");
} else {
    alert("Calificacion no valida");
}
