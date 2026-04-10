// ======================================
// 1. VALIDAR EDAD (RESTAURANTE BAR)
// ======================================

// Pedir edad
let edad = prompt("Ingrese su edad:");

// Condicional
if (edad >= 18) {
  document.write("Bienvenido al restaurante Bar<br>");
} else {
  document.write("Lo siento, no tienes la edad requerida para ingresar<br>");
}

// SALTO DE LÍNEA
document.write("<br><br>");


// ======================================
// 2. DESCUENTO POR COLOR DE BOLITA
// ======================================

// Pedir color
let color = prompt("Ingrese el color de la bolita (amarilla, morada u otro):");

// Convertir a minúscula para evitar errores
color = color.toLowerCase();

// Condicional
if (color === "amarilla") {
  document.write("Descuento aplicado: 50%<br>");
} else if (color === "morada") {
  document.write("Descuento aplicado: 30%<br>");
} else {
  document.write("No se aplica ningún descuento<br>");
}

// SALTO DE LÍNEA
document.write("<br><br>");


// ======================================
// 3. CAJA REGISTRADORA DE FRUTAS (SWITCH)
// ======================================

// Pedir fruta
let fruta = prompt("Ingrese el nombre de una fruta:");

// Convertir a minúscula
fruta = fruta.toLowerCase();

// Variable para precio
let precio = 0;

// Switch con 10 frutas
switch (fruta) {
  case "manzana":
    precio = 3000;
    break;
  case "pera":
    precio = 2500;
    break;
  case "banana":
    precio = 2000;
    break;
  case "naranja":
    precio = 1800;
    break;
  case "uva":
    precio = 4000;
    break;
  case "piña":
    precio = 3500;
    break;
  case "mango":
    precio = 3200;
    break;
  case "fresa":
    precio = 4500;
    break;
  case "sandia":
    precio = 1500;
    break;
  case "papaya":
    precio = 2800;
    break;
  default:
    precio = null;
}

// Mostrar resultado
if (precio !== null) {
  document.write("El precio de la " + fruta + " es: $" + precio + " por libra");
} else {
  document.write("Fruta no disponible");
}