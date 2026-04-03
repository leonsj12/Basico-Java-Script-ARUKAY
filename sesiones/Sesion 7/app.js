// ===============================
// PRODUCTOS
// ===============================

let yogurt = 14000;
let gaseosa = 10000;
let galletas = 5000;
let leche = 21000;
let atun = 36000;
let frijoles = 40000;
let arvejas = 30000;

// ===============================
// BONO
// ===============================

let bono = 118000;

// ===============================
// COMPRA DEL CLIENTE
// (solo algunos productos)
// ===============================

let valorTotal = yogurt + gaseosa + galletas + atun + arvejas;

// ===============================
// VALIDACIÓN
// ===============================

let resultado = bono - valorTotal;

// ===============================
// MOSTRAR EN PANTALLA
// ===============================

let salida = "";

// Mostrar todos los productos
salida += "<b>Lista de productos disponibles:</b><br>";
salida += "Yogurt: $" + yogurt + "<br>";
salida += "Gaseosa: $" + gaseosa + "<br>";
salida += "Galletas: $" + galletas + "<br>";
salida += "Leche: $" + leche + "<br>";
salida += "Atún: $" + atun + "<br>";
salida += "Fríjoles: $" + frijoles + "<br>";
salida += "Arvejas: $" + arvejas + "<br><br>";

// Mostrar compra del cliente
salida += "<b>Productos comprados:</b><br>";
salida += "Yogurt, Gaseosa, Galletas, Atún, Arvejas<br><br>";

// Mostrar valores
salida += "Total compra: $" + valorTotal + "<br>";
salida += "Valor bono: $" + bono + "<br><br>";

// Resultado final
if (resultado >= 0) {
  salida += "<b>El bono SÍ alcanza</b><br>";
  salida += "Sobra: $" + resultado;
} else {
  salida += "<b>El bono NO alcanza</b><br>";
  salida += "Falta: $" + Math.abs(resultado);
}

// Mostrar en HTML
document.getElementById("resultado").innerHTML = salida;

// También en consola
console.log(salida);