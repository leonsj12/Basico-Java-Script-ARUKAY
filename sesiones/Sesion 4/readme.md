# Proyecto: Sistema de compra de Tickets

Este proyecto es una práctica de JavaScript que simula la compra de tickets con aplicación de descuentos. Permite aprender cómo manejar variables globales, estructuras condicionales, acumuladores, arreglos y manipulación del DOM.

**¿Qué hace este proyecto?**

El sistema permite:

- Comprar tickets presionando botones  
- Aplicar descuento si se compran 3 o más tickets  
- Acumular totales de compra  
- Mostrar resultados en pantalla  
- Guardar un historial de compras en consola  



**Conceptos fundamentales**

***1. Variables globales***

Las variables globales son accesibles desde cualquier parte del programa.

Se utilizan para almacenar datos acumulados:

```javascript
const PRECIO_TICKET = 10000;

let cantidadTickets = 0;
let totalTickets = 0;
let totalDescuento = 0;
let totalPago = 0;
let numDescuentos = 0;
let historial = [];
```

***2. Función para agregar tickets***

Esta función se ejecuta cuando el usuario presiona un botón.

```javascript
function agregarTickets(num) {

    cantidadTickets += num;

    let subtotal = num * PRECIO_TICKET;
    let descuento = 0;

    if (num >= 3) {
        descuento = subtotal * 0.10;
        numDescuentos++;
    }

    let pago = subtotal - descuento;

    totalTickets += subtotal;
    totalDescuento += descuento;
    totalPago += pago;

    let texto = num + " tickets: " +
        subtotal + " - " +
        descuento + " = " +
        pago;

    historial.push(texto);

    console.table(historial);
}
```

***3. Estructuras condicionales (if)***

Se usa `if` para tomar decisiones:

```javascript
if (num >= 3) {
    descuento = subtotal * 0.10;
}
```

Esto significa:

- Si compra 3 o más tickets → hay descuento  
- Si no → no hay descuento  

***4. Acumuladores***

Son variables que guardan resultados progresivos:

```javascript
totalTickets += subtotal;
totalDescuento += descuento;
totalPago += pago;
```

Permiten sumar múltiples compras.

***5. Arreglos (historial)***

Se usa un arreglo para guardar las compras realizadas:

```javascript
historial.push(texto);
```

Luego se muestra en consola:

```javascript
console.table(historial);
```

Esto ayuda a visualizar los datos de forma ordenada.

***6. Manipulación del DOM***

Se actualiza el contenido del HTML con los resultados:

```javascript
document.getElementById("cantidad").innerHTML = cantidadTickets;
document.getElementById("totalTickets").innerHTML = totalTickets;
document.getElementById("numDescuentos").innerHTML = numDescuentos;
document.getElementById("totalDescuento").innerHTML = totalDescuento;
document.getElementById("totalPago").innerHTML = totalPago;
```

***7. Eventos (onclick)***

Los botones ejecutan funciones al hacer clic:

```html
<button onclick="agregarTickets(1)">1 ticket</button>
<button onclick="agregarTickets(2)">2 tickets</button>
<button onclick="agregarTickets(3)">3 tickets</button>

<button onclick="mostrarTotal()">Mostrar Total</button>
```

***8. Panel de resultados en HTML***

El HTML contiene un panel donde se muestran los datos:

```html
<div id="panelResultados">

<b>Cantidad:</b> <span id="cantidad">0</span> <br/>

<b>Total pago tickets:</b> $<span id="totalTickets">0</span> <br/>

<b>Total descuento (<span id="numDescuentos">0</span>):</b> $<span id="totalDescuento">0</span> <br/>

<b>Total pago:</b> $<span id="totalPago">0</span>

</div>
```

**Flujo del programa**

1. El usuario presiona un botón de tickets  
2. Se ejecuta la función agregarTickets()  
3. Se calcula subtotal, descuento y pago  
4. Se acumulan los valores globales  
5. Se guarda el historial  
6. El usuario presiona "Mostrar Total"  
7. Se actualiza el panel con los resultados  

**Estructura del proyecto**

```
proyecto/
│── index.html   → Interfaz del usuario
│── app.js       → Lógica del programa
```

**Posibles mejoras**

- Permitir ingresar la cantidad manualmente  
- Mostrar el historial en pantalla (no solo en consola)  
- Formatear valores como moneda  
- Reiniciar el sistema con un botón  
- Usar addEventListener en lugar de onclick  

**Conclusión**

Este ejercicio permite comprender:

- Uso de variables globales  
- Aplicación de estructuras condicionales  
- Uso de acumuladores  
- Manejo de arreglos para almacenar datos  
- Interacción con el usuario mediante eventos  
- Actualización dinámica del contenido HTML  

Es una base importante para desarrollar sistemas más complejos como ventas, facturación o aplicaciones interactivas.

**Autor**

Proyecto realizado como práctica de aprendizaje en JavaScript.