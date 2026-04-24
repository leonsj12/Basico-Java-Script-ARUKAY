// ======================================
// TIENDA VIRTUAL
// ======================================

// Mostrar nombre de la tienda y productos
document.write("<h1>Tienda Virtual TechShop</h1>");
document.write("Artículo 1: Audífonos Bluetooth - $80000<br>");
document.write("Artículo 2: Mouse Gamer - $50000<br><br>");


// ======================================
// VARIABLES DE LOS ARTÍCULOS
// ======================================

// Precios
let audifonos = 80000;
let mouse = 50000;

// Cantidad seleccionada por iteración
let cantidadArticulo = 0;

// Cantidad total acumulada por artículo
let totalAudifonos = 0;
let totalMouse = 0;

// Subtotales
let subtotalAudifonos = 0;
let subtotalMouse = 0;

// Precio total acumulado
let totalCompra = 0;


// ======================================
// INICIO DE COMPRA
// ======================================

let respuesta = prompt("¿Desea realizar una compra? (si / no)");
let comprar = false;

if (respuesta.toLowerCase() === "si") {
  comprar = true;
} else {
  document.write("Gracias por visitar TechShop.");
}


// ======================================
// CICLO WHILE
// ======================================

while (comprar) {

  let opcion = prompt("¿Qué desea comprar? (1 = Audífonos Bluetooth / 2 = Mouse Gamer)");

  // ======================================
  // PRIMER ARTÍCULO
  // ======================================
  if (opcion === "1") {
    cantidadArticulo = parseInt(prompt("¿Cuántos Audífonos Bluetooth desea comprar?"));
    subtotalAudifonos = audifonos * cantidadArticulo;
    totalAudifonos += cantidadArticulo;
  }

  // ======================================
  // SEGUNDO ARTÍCULO
  // ======================================
  else if (opcion === "2") {
    cantidadArticulo = parseInt(prompt("¿Cuántos Mouse Gamer desea comprar?"));
    subtotalMouse = mouse * cantidadArticulo;
    totalMouse += cantidadArticulo;
  }

  // ======================================
  // ACUMULAR TOTAL
  // ======================================
  totalCompra += subtotalAudifonos + subtotalMouse;

  // Reiniciar subtotales
  subtotalAudifonos = 0;
  subtotalMouse = 0;

  // ======================================
  // PREGUNTAR SI DESEA OTRA COMPRA
  // ======================================
  let continuar = prompt("¿Desea realizar otra compra? (si / no)");

  if (continuar.toLowerCase() !== "si") {
    comprar = false;
  }
}


// ======================================
// RESULTADO FINAL
// ======================================

document.write("<h2>Resumen de Compra</h2>");
document.write("Cantidad de Audífonos Bluetooth comprados: " + totalAudifonos + "<br>");
document.write("Cantidad de Mouse Gamer comprados: " + totalMouse + "<br>");
document.write("Total de la compra: $" + totalCompra);