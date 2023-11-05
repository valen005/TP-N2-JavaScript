const filas = parseInt(prompt("Introduce un numero de filas"));
const columna = parseInt(prompt("Introduce un numero de columnas"));
const totalCeldas = filas * columna;

document.write(`<table><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas = indiceFilas + 1){
    document.write(`
<tr>
    <td>
        1
    </td>
</tr>`);
}
  
document.write(`</tbody></table> `);
