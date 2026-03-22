# Proyecto: Sistema de restaurante

Este proyecto es una práctica de JavaScript que simula un sistema de pedidos en un restaurante. Permite ingresar órdenes de clientes, calcular totales y mostrar resultados en pantalla.

**¿Qué hace este proyecto?**

El sistema permite:

- Registrar pedidos de clientes  
- Calcular el total a pagar por cada persona  
- Acumular la cantidad de productos vendidos  
- Mostrar una lista de pedidos  
- Calcular el total general del día  

**Conceptos fundamentales**

***1. Estructura HTML***

El HTML define la interfaz del sistema:

- Campos de entrada (inputs) para datos  
- Botones para ejecutar acciones  
- Contenedores para mostrar resultados  

Ejemplo:

```html
<input type="text" id="nombre" placeholder="Nombre del cliente">

<input type="number" id="perro" value="0">

<button onclick="agregarPedido()">Agregar Pedido</button>
```

***2. Variables***

Una **variable** es un espacio donde se guarda información que puede cambiar.

Ejemplo:

```javascript
let totalGeneral = 0;
```

Se usa para acumular el total de todos los pedidos.

***3. Constantes***

Una **constante** es una variable cuyo valor no cambia.

```javascript
const PRECIO_PERRO = 15000;
```

Se utiliza para definir precios fijos.

***4. Funciones***

Una **función** es un bloque de código que realiza una tarea específica.

Ejemplo:

```javascript
function agregarPedido() {
    // lógica del pedido
}
```

Las funciones permiten organizar el programa y reutilizar código.

***5. Eventos***

Un **evento** es una acción del usuario, como hacer clic en un botón.

```html
<button onclick="agregarPedido()">Agregar Pedido</button>
```

Esto ejecuta la función cuando el usuario interactúa.

***6. Arreglos (Arrays)***

Un **arreglo** es una estructura que permite guardar múltiples datos en una sola variable.

```javascript
let pedidos = [];
```

Se usa para almacenar todos los pedidos realizados.

***7. Objetos***

Un **objeto** permite agrupar información en forma de propiedades.

```javascript
pedidos.push({
  nombre: nombre,
  totalPersona: totalPersona
});
```

Cada pedido se guarda como un objeto con datos del cliente.

***8. Manipulación del DOM***

El **DOM** representa la página web y permite modificar su contenido con JavaScript.

Ejemplo:

```javascript
document.getElementById("totalGeneral").textContent = "$" + totalGeneral;
```

Esto actualiza el contenido visible en la página.

***9. Obtención de datos del usuario***

Se obtienen los valores ingresados en los inputs:

```javascript
const nombre = nombreInput.value.trim();
```

- `.value` obtiene el valor  
- `.trim()` elimina espacios en blanco  

***10. Conversión de datos***

Se usa `parseInt` para convertir texto en número:

```javascript
const perros = parseInt(perroInput.value) || 0;
```

Esto evita errores si el campo está vacío.

***11. Condicionales (if)***

Permiten tomar decisiones:

```javascript
if (nombre === "") {
    alert("Ingrese un nombre");
    return;
}
```

Evita continuar si el usuario no ingresa datos.

***12. Acumuladores***

Son variables que suman valores progresivamente:

```javascript
totalPerros += perros;
totalGeneral += totalPersona;
```

***13. Creación de elementos dinámicos***

JavaScript puede crear elementos HTML:

```javascript
const li = document.createElement("li");
li.textContent = nombre + " - $" + totalPersona;
```

Esto permite mostrar los pedidos en una lista.

***14. Recorridos (forEach)***

Permite recorrer un arreglo:

```javascript
pedidos.forEach(function (pedido) {
  console.log(pedido.nombre);
});
```

**Flujo del programa**

1. El usuario ingresa su nombre y cantidades  
2. Hace clic en "Agregar Pedido"  
3. Se calculan los valores del pedido  
4. Se actualizan los totales acumulados  
5. Se guarda el pedido en el arreglo  
6. Se muestra el pedido en la lista  
7. El usuario puede ver los totales generales  

**Estructura del proyecto**

```
proyecto/
│── index.html   → Interfaz del usuario
│── app.js       → Lógica en JavaScript
```

**Posibles mejoras**

- Mostrar el detalle completo de cada pedido  
- Eliminar pedidos de la lista  
- Aplicar descuentos  
- Guardar datos en el navegador  
- Mejorar el diseño con CSS  

**Conclusión**

Este ejercicio permite comprender:

- Cómo capturar datos del usuario  
- Cómo usar arreglos y objetos  
- Cómo crear funciones reutilizables  
- Cómo manipular el DOM  
- Cómo construir interfaces dinámicas  

Es una base sólida para desarrollar sistemas más avanzados como aplicaciones de ventas o gestión de pedidos.

**Autor**

Proyecto realizado como práctica de aprendizaje en JavaScript.
