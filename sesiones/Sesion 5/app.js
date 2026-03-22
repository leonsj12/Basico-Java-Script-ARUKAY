// =====================================================
// ESPERAR A QUE TODO EL HTML CARGUE ANTES DE EJECUTAR JS
// =====================================================
window.onload = function () {

  // =====================================================
  // PRECIOS DE LOS PRODUCTOS (CONSTANTES)
  // =====================================================
  const PRECIO_PERRO = 15000;
  const PRECIO_HAMBURGUESA = 20000;
  const PRECIO_GASEOSA = 8000;
  const PRECIO_AGUA = 1000;

  // =====================================================
  // VARIABLES PARA ACUMULAR LOS TOTALES
  // =====================================================
  let totalPerros = 0;
  let totalHamburguesas = 0;
  let totalGaseosas = 0;
  let totalAguas = 0;
  let totalGeneral = 0;

  // =====================================================
  // ARREGLO PARA GUARDAR LOS PEDIDOS DE CADA PERSONA
  // =====================================================
  let pedidos = [];

  // =====================================================
  // REFERENCIAS A LOS ELEMENTOS DEL HTML
  // =====================================================
  const nombreInput = document.getElementById("nombre");
  const perroInput = document.getElementById("perro");
  const hamburguesaInput = document.getElementById("hamburguesa");
  const gaseosaInput = document.getElementById("gaseosa");
  const aguaInput = document.getElementById("agua");
  const listaPedidos = document.getElementById("listaPedidos");

  // =====================================================
  // FUNCIÓN PARA AGREGAR UN NUEVO PEDIDO
  // =====================================================
  window.agregarPedido = function () {

    // Obtener el nombre del cliente
    const nombre = nombreInput.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
      alert("Ingrese un nombre");
      return; // Detiene la ejecución
    }

    // Obtener cantidades de productos (si están vacías → 0)
    const perros = parseInt(perroInput.value) || 0;
    const hamburguesas = parseInt(hamburguesaInput.value) || 0;
    const gaseosas = parseInt(gaseosaInput.value) || 0;
    const aguas = parseInt(aguaInput.value) || 0;

    // =====================================================
    // CALCULAR EL TOTAL A PAGAR POR ESTA PERSONA
    // =====================================================
    const totalPersona =
      (perros * PRECIO_PERRO) +
      (hamburguesas * PRECIO_HAMBURGUESA) +
      (gaseosas * PRECIO_GASEOSA) +
      (aguas * PRECIO_AGUA);

    // =====================================================
    // ACTUALIZAR LOS TOTALES GENERALES
    // =====================================================
    totalPerros += perros;
    totalHamburguesas += hamburguesas;
    totalGaseosas += gaseosas;
    totalAguas += aguas;
    totalGeneral += totalPersona;

    // =====================================================
    // GUARDAR EL PEDIDO EN EL ARREGLO
    // =====================================================
    pedidos.push({
      nombre: nombre,
      totalPersona: totalPersona
    });

    // =====================================================
    // ACTUALIZAR LOS VALORES EN PANTALLA
    // =====================================================
    document.getElementById("totalPerros").textContent = totalPerros;
    document.getElementById("totalHamburguesas").textContent = totalHamburguesas;
    document.getElementById("totalGaseosas").textContent = totalGaseosas;
    document.getElementById("totalAguas").textContent = totalAguas;

    // =====================================================
    // MOSTRAR EL PEDIDO EN LA LISTA VISUAL
    // =====================================================
    const li = document.createElement("li");
    li.textContent = nombre + " - $" + totalPersona;
    listaPedidos.appendChild(li);

    // =====================================================
    // LIMPIAR LOS CAMPOS PARA EL SIGUIENTE PEDIDO
    // =====================================================
    nombreInput.value = "";
    perroInput.value = 0;
    hamburguesaInput.value = 0;
    gaseosaInput.value = 0;
    aguaInput.value = 0;
  };

  // =====================================================
  // FUNCIÓN PARA MOSTRAR LOS TOTALES
  // =====================================================
  window.mostrarTotales = function () {

    console.log("---- Totales por persona ----");

    // Recorrer el arreglo y mostrar cada pedido en consola
    pedidos.forEach(function (pedido) {
      console.log(pedido.nombre + ": $" + pedido.totalPersona);
    });

    // Mostrar el total general en pantalla
    document.getElementById("totalGeneral").textContent = "$" + totalGeneral;
  };

};