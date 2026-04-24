# Proyecto: Tienda Virtual

Este proyecto es una práctica de JavaScript que simula una tienda virtual básica. Permite al usuario seleccionar productos, indicar cantidades, acumular compras y mostrar un resumen final.

---

## ¿Qué hace este proyecto?

El sistema simula una tienda llamada **TechShop** y permite:

- Mostrar productos disponibles  
- Preguntar al usuario si desea comprar  
- Permitir seleccionar artículos  
- Ingresar cantidades  
- Acumular compras en un ciclo  
- Mostrar un resumen final con cantidades y total pagado  

---

## Conceptos fundamentales

### 1. Variables

Una **variable** es un espacio donde se almacena información que puede cambiar durante la ejecución del programa.

Ejemplo:

```javascript
let audifonos = 80000;
let mouse = 50000;
```

Estas variables guardan el precio de cada producto.

---

### 2. Salida en pantalla

Se utiliza `document.write()` para mostrar información directamente en la página web.

```javascript
document.write("<h1>Tienda Virtual TechShop</h1>");
```

Esto permite imprimir texto y estructura HTML desde JavaScript.

---

### 3. prompt()

La función `prompt()` permite pedir información al usuario mediante una ventana emergente.

```javascript
let respuesta = prompt("¿Desea realizar una compra? (si / no)");
```

El valor ingresado se guarda en una variable.

---

### 4. Condicionales (if / else)

Las estructuras condicionales permiten tomar decisiones.

```javascript
if (respuesta.toLowerCase() === "si") {
  comprar = true;
} else {
  document.write("Gracias por visitar TechShop.");
}
```

Esto permite decidir si el programa continúa o termina.

---

### 5. Booleanos

Un **booleano** es un tipo de dato que solo puede tener dos valores:

- `true` (verdadero)  
- `false` (falso)  

```javascript
let comprar = false;
```

Se usa para controlar si el ciclo debe ejecutarse.

---

### 6. Ciclo while

El ciclo `while` repite un bloque de código mientras una condición sea verdadera.

```javascript
while (comprar) {
  // código repetitivo
}
```

Se utiliza para permitir múltiples compras.

---

### 7. Conversión de datos (parseInt)

La función `parseInt()` convierte texto en número.

```javascript
cantidadArticulo = parseInt(prompt("¿Cuántos desea comprar?"));
```

Esto permite realizar operaciones matemáticas con el valor ingresado.

---

### 8. Acumuladores

Un **acumulador** es una variable que suma valores progresivamente.

```javascript
totalAudifonos += cantidadArticulo;
totalCompra += subtotalAudifonos + subtotalMouse;
```

Se utiliza para guardar el total acumulado de productos y compras.

---

### 9. Operaciones matemáticas

JavaScript permite hacer cálculos para obtener subtotales y totales.

```javascript
subtotalAudifonos = audifonos * cantidadArticulo;
```

Esto calcula el costo según la cantidad seleccionada.

---

### 10. Reinicio de variables

Después de acumular los subtotales, se reinician para evitar errores en la siguiente compra.

```javascript
subtotalAudifonos = 0;
subtotalMouse = 0;
```

Esto asegura que cada iteración comience limpia.

---

### 11. Métodos de texto (toLowerCase)

Convierte texto a minúsculas para evitar errores de comparación.

```javascript
respuesta.toLowerCase()
```

Permite aceptar respuestas como "SI", "Si" o "si".

---

## Flujo del programa

1. Se muestran los productos disponibles  
2. El usuario decide si desea comprar  
3. Si acepta, entra al ciclo de compra  
4. Selecciona un producto  
5. Ingresa cantidad  
6. Se calcula subtotal  
7. Se acumula la compra  
8. Se pregunta si desea continuar  
9. Al finalizar, se muestra el resumen  

---

## Estructura del proyecto

```text
proyecto/
│── index.html   → Estructura básica
│── app.js       → Lógica en JavaScript
```

---

## Posibles mejoras

- Agregar más productos  
- Validar entradas incorrectas  
- Aplicar descuentos automáticos  
- Mostrar resultados en un contenedor HTML en lugar de `document.write()`  
- Mejorar la interfaz con CSS  

---

## Conclusión

Este ejercicio permite comprender:

- Uso de variables  
- Captura de datos con `prompt()`  
- Uso de condicionales  
- Manejo de ciclos `while`  
- Acumulación de valores  
- Cálculos dinámicos en JavaScript  

Es una base importante para construir sistemas de compra más avanzados.

---

## Autor

Proyecto realizado como práctica de aprendizaje en JavaScript.