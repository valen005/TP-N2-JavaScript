const filas = parseInt(prompt("Introduce un numero de filas"));
const columnas = parseInt(prompt("Introduce un numero de columnas"));
let totalCeldas = filas * columnas;

document.write(`<table><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas = indiceFilas + 1) {
  document.write(`<tr>`);
  for (
    let indiceColumnas = 0;
    indiceColumnas < columnas;
    indiceColumnas = indiceColumnas + 1
  ) {
    document.write(`<td>${totalCeldas}</td>`);
    totalCeldas = totalCeldas - 1;
  }
  document.write(`</tr>`);
}

document.write(`</tbody></table> `);
