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

***2. Arreglos (Arrays)***

Un **arreglo** es una estructura de datos que permite guardar múltiples valores dentro de una sola variable.

Sirve para organizar información relacionada.

En este caso, se usa un arreglo de objetos para almacenar productos:

```javascript
const productos = [
    {nombre: "Laptop", cantidad: 1, valorUnitario: 2000000},
    {nombre: "Mouse", cantidad: 2, valorUnitario: 50000},
    {nombre: "Teclado", cantidad: 1, valorUnitario: 120000}
];
```

Cada elemento del arreglo es un **objeto** con propiedades.

***3. Objetos***

Un **objeto** es una estructura que permite agrupar información en forma de clave y valor.

Ejemplo:

```javascript
{
    nombre: "Laptop",
    cantidad: 1,
    valorUnitario: 2000000
}
```

Esto representa un producto con sus características.

***4. Funciones***

Una **función** es un bloque de código que se puede reutilizar para realizar una tarea específica.

Ejemplo:

```javascript
function calcularTotalProducto(cantidad, valorUnitario){
    return cantidad * valorUnitario;
}
```

Las funciones ayudan a organizar el código y evitar repeticiones.

***5. Parámetros y retorno***

- **Parámetros**: valores que recibe la función  
- **return**: valor que la función devuelve  

Ejemplo:

```javascript
function calcularIVA(total){
    return total * 0.19;
}
```

***6. Recorridos (forEach)***

El método `forEach` permite recorrer todos los elementos de un arreglo.

```javascript
productos.forEach(producto => {
    console.log(producto.nombre);
});
```

Sirve para ejecutar acciones con cada elemento.


***7. Manipulación del DOM***

El **DOM** es la representación de la página web en forma de objetos.

JavaScript puede modificar el contenido usando:

```javascript
document.getElementById("total-compra").innerHTML = "Total: $" + total;
```

Esto permite actualizar la información en la página.

***8. Creación de elementos dinámicos***

JavaScript puede crear elementos HTML en tiempo real:

```javascript
let div = document.createElement("div");
div.innerHTML = "Producto";
```

Esto permite generar contenido sin escribirlo directamente en HTML.

***9. Cálculos en JavaScript***

Se realizan operaciones matemáticas como:

- Multiplicación (cantidad * precio)  
- Suma de totales  
- Cálculo de impuestos  

Ejemplo:

```javascript
let total = cantidad * valorUnitario;
```

**Flujo del programa**

1. Se define el arreglo de productos  
2. Se recorren los productos  
3. Se calcula el total por producto  
4. Se muestran los productos en pantalla  
5. Se calcula el total general  
6. Se calcula el IVA  
7. Se muestra el resumen en el HTML  

**Estructura del proyecto**

```
proyecto/
│── index.html   → Estructura de la página
│── app.js       → Lógica en JavaScript
```

**Posibles mejoras**

- Permitir agregar productos dinámicamente  
- Eliminar productos del carrito  
- Formatear valores como moneda  
- Usar eventos modernos (addEventListener)  
- Guardar datos en el navegador  

**Conclusión**

Este ejercicio permite comprender:

- Qué es un arreglo y cómo usarlo  
- Cómo funcionan los objetos en JavaScript  
- Cómo crear y usar funciones  
- Cómo recorrer datos con forEach  
- Cómo manipular el DOM  
- Cómo hacer cálculos dinámicos  

Es una base fundamental para desarrollar aplicaciones web más avanzadas.

**Autor**

Proyecto realizado como práctica de aprendizaje en JavaScript.
