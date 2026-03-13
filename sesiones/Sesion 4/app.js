/*
========================================
VARIABLES GLOBALES
========================================
*/

// precio unitario del ticket
const PRECIO_TICKET = 10000;

// variables acumuladoras
let cantidadTickets = 0;
let totalTickets = 0;
let totalDescuento = 0;
let totalPago = 0;

// contador de descuentos aplicados
let numDescuentos = 0;

// arreglo para guardar historial de compras
let historial = [];


/*
========================================
FUNCION PARA AGREGAR TICKETS
Se ejecuta al presionar los botones
========================================
*/

function agregarTickets(num) {

    // aumentar cantidad de tickets
    cantidadTickets += num;

    // calcular subtotal
    let subtotal = num * PRECIO_TICKET;

    // variable de descuento
    let descuento = 0;

    /*
    si compra 3 o mas tickets
    se aplica 10% de descuento
    */
    if (num >= 3) {

        descuento = subtotal * 0.10;

        numDescuentos++;
    }

    // calcular pago final
    let pago = subtotal - descuento;

    // acumular valores globales
    totalTickets += subtotal;
    totalDescuento += descuento;
    totalPago += pago;

    /*
    Guardar detalle en el arreglo
    para mostrarlo en la consola
    */

    let texto = num + " tickets: " +
        subtotal + " - " +
        descuento + " = " +
        pago;

    historial.push(texto);

    // mostrar en consola
    console.table(historial);

}


/*
========================================
FUNCION PARA MOSTRAR RESULTADOS
EN EL PANEL HTML
========================================
*/

function mostrarTotal() {

    // actualizar panel usando getElementById

    document.getElementById("cantidad").innerHTML = cantidadTickets;

    document.getElementById("totalTickets").innerHTML = totalTickets;

    document.getElementById("numDescuentos").innerHTML = numDescuentos;

    document.getElementById("totalDescuento").innerHTML = totalDescuento;

    document.getElementById("totalPago").innerHTML = totalPago;

}