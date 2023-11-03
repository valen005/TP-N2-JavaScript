let edad = parseInt(
  prompt("Introduce tu edad para verificar si puedes conducir:")
);

if (edad >= 18) {
  document.write("Tienes la edad suficiente para conducir");
} else {
  document.write("NO tienes la edad suficiente para conducir");
}
