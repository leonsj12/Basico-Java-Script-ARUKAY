# Proyecto: Carrito de compras

Este proyecto es una práctica de JavaScript donde se simula un carrito de compras. Permite entender cómo trabajar con arreglos de objetos, funciones, cálculos y manipulación del DOM para mostrar información dinámica en una página web.

**¿Qué hace este proyecto?**

El sistema muestra una lista de productos con:

- Nombre  
- Cantidad  
- Valor unitario  
- Total por producto  

Además, calcula automáticamente:

- Total de la compra  
- IVA (19%)  
- Total final con IVA  

**Conceptos fundamentales**

***1. Estructura HTML***

El HTML organiza la página en dos paneles:

- Panel izquierdo: lista de productos  
- Panel derecho: resumen de compra  

Ejemplo:

```html
<div class="contenedor">

    <div class="panel">
        <h2>Lista de artículos</h2>
        <div id="lista-productos"></div>
    </div>

    <div class="panel">
        <h2>Resumen de compra</h2>
        <p id="total-compra"></p>
        <p id="iva"></p>
        <p id="total-con-iva"></p>
    </div>

</div>
```

***2. Arreglos de objetos***

Se utiliza un arreglo que contiene objetos. Cada objeto representa un producto.

```javascript
const productos = [
    {nombre: "Laptop", cantidad: 1, valorUnitario: 2000000},
    {nombre: "Mouse", cantidad: 2, valorUnitario: 50000},
    {nombre: "Teclado", cantidad: 1, valorUnitario: 120000}
];
```

Esto permite organizar mejor la información.

***3. Funciones***

Las funciones permiten dividir el programa en partes reutilizables.

***Calcular total por producto***

```javascript
function calcularTotalProducto(cantidad, valorUnitario){
    return cantidad * valorUnitario;
}
```

***Calcular total de la compra***

```javascript
function calcularTotalCompra(lista){

    let total = 0;

    lista.forEach(producto => {
        total += calcularTotalProducto(
            producto.cantidad,
            producto.valorUnitario
        );
    });

    return total;
}
```

***Calcular IVA***

```javascript
function calcularIVA(total){
    return total * 0.19;
}
```

***4. Recorrido de datos (forEach)***

Se utiliza `forEach` para recorrer el arreglo de productos:

```javascript
productos.forEach(producto => {
    // operaciones con cada producto
});
```

Esto permite trabajar con cada elemento de forma sencilla.

***5. Manipulación del DOM***

JavaScript crea elementos dinámicamente y los inserta en el HTML.

```javascript
let linea = document.createElement("div");
linea.classList.add("producto");

linea.innerHTML = `
<strong>${producto.nombre}</strong><br>
Cantidad: ${producto.cantidad}<br>
Valor unitario: $${producto.valorUnitario}<br>
Total producto: $${totalProducto}
`;

contenedor.appendChild(linea);
```

Esto permite mostrar los productos en pantalla sin escribirlos directamente en HTML.

**6. Mostrar resultados en pantalla**

Se actualizan elementos del HTML usando `innerHTML`:

```javascript
document.getElementById("total-compra").innerHTML =
    "Total de la compra: $" + totalCompra;

document.getElementById("iva").innerHTML =
    "IVA (19%): $" + iva;

document.getElementById("total-con-iva").innerHTML =
    "Total con IVA: $" + totalConIVA;
```

**Flujo del programa**

1. Se define el arreglo de productos  
2. Se muestran los productos en pantalla  
3. Se calcula el total de la compra  
4. Se calcula el IVA  
5. Se calcula el total final  
6. Se muestran los resultados en el HTML  

**Estructura del proyecto**

```
proyecto/
│── index.html   → Estructura de la página
│── app.js       → Lógica en JavaScript
```

**Estilos básicos (CSS interno)**

Se utiliza CSS dentro del HTML para organizar la interfaz:

```css
.contenedor{
    display: flex;
    gap: 40px;
}

.panel{
    border: 1px solid #ccc;
    padding: 20px;
    width: 320px;
}
```

Esto permite mostrar los paneles uno al lado del otro.

**Posibles mejoras**

- Permitir agregar productos desde el usuario  
- Eliminar productos del carrito  
- Formatear los números como moneda  
- Usar eventos en lugar de ejecución automática  
- Guardar datos en localStorage  

**Conclusión**

Este ejercicio permite comprender:

- Uso de arreglos de objetos  
- Creación de funciones reutilizables  
- Recorrido de datos con forEach  
- Cálculos matemáticos en JavaScript  
- Manipulación dinámica del DOM  

Es un paso importante hacia el desarrollo de aplicaciones más complejas como tiendas en línea.

**Autor**

Proyecto realizado como práctica de aprendizaje en JavaScript.