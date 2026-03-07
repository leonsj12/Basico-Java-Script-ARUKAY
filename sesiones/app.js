// ============================================
// ARREGLO DE PRODUCTOS
// Cada producto tiene:
// nombre, cantidad y valor unitario
// ============================================

const productos = [

    {nombre: "Laptop", cantidad: 1, valorUnitario: 2000000},
    {nombre: "Mouse", cantidad: 2, valorUnitario: 50000},
    {nombre: "Teclado", cantidad: 1, valorUnitario: 120000}

];


// ============================================
// FUNCIÓN: calcularTotalProducto
// Calcula el total de un producto
// multiplicando cantidad por valor unitario
// ============================================

function calcularTotalProducto(cantidad, valorUnitario){

    return cantidad * valorUnitario;

}


// ============================================
// FUNCIÓN: calcularTotalCompra
// Recorre la lista de productos y suma
// el total de cada producto
// ============================================

function calcularTotalCompra(lista){

    let total = 0;

    // Recorre cada producto del arreglo
    lista.forEach(producto => {

        total += calcularTotalProducto(
            producto.cantidad,
            producto.valorUnitario
        );

    });

    return total;

}


// ============================================
// FUNCIÓN: calcularIVA
// Calcula el 19% del total de la compra
// ============================================

function calcularIVA(total){

    return total * 0.19;

}


// ============================================
// FUNCIÓN: mostrarProductos
// Muestra cada producto dentro del panel
// ============================================

function mostrarProductos(){

    // Obtener el contenedor del HTML
    const contenedor = document.getElementById("lista-productos");

    // Recorrer el arreglo de productos
    productos.forEach(producto => {

        // Calcular el total de cada producto
        let totalProducto = calcularTotalProducto(
            producto.cantidad,
            producto.valorUnitario
        );

        // Crear un div para mostrar el producto
        let linea = document.createElement("div");

        // Agregar clase para estilo
        linea.classList.add("producto");

        // Contenido que se mostrará en pantalla
        linea.innerHTML = `
        <strong>${producto.nombre}</strong><br>
        Cantidad: ${producto.cantidad}<br>
        Valor unitario: $${producto.valorUnitario}<br>
        Total producto: $${totalProducto}
        `;

        // Insertar el producto en el contenedor
        contenedor.appendChild(linea);

    });

}


// ============================================
// FUNCIÓN: mostrarTotales
// Calcula y muestra los totales de la compra
// ============================================

function mostrarTotales(){

    // Calcular total de la compra
    let totalCompra = calcularTotalCompra(productos);

    // Calcular IVA
    let iva = calcularIVA(totalCompra);

    // Total final con IVA
    let totalConIVA = totalCompra + iva;

    // Mostrar resultados en el HTML
    document.getElementById("total-compra").innerHTML =
        "Total de la compra: $" + totalCompra;

    document.getElementById("iva").innerHTML =
        "IVA (19%): $" + iva;

    document.getElementById("total-con-iva").innerHTML =
        "Total con IVA: $" + totalConIVA;

}


// ============================================
// EJECUCIÓN DEL PROGRAMA
// ============================================

// Mostrar productos en pantalla
mostrarProductos();

// Mostrar los totales de la compra
mostrarTotales();