# Proyecto: Validación de Bono de Alimentación

Este proyecto es una práctica de JavaScript donde se simula una compra de productos y se valida si un bono alcanza para pagarla.

---

## ¿Qué hace este proyecto?

El sistema:

- Define precios de varios productos  
- Simula una compra seleccionando algunos productos  
- Calcula el total de la compra  
- Compara el total con un bono disponible  
- Muestra si el bono alcanza o no  
- Indica cuánto sobra o cuánto falta  

---

## Conceptos fundamentales

### 1. Variables

Una **variable** es un espacio donde se guarda información.

Ejemplo:

```javascript
let yogurt = 14000;
let gaseosa = 10000;
```

Aquí se almacenan los precios de los productos.

---

### 2. Operaciones matemáticas

JavaScript permite realizar cálculos como sumas y restas.

```javascript
let valorTotal = yogurt + gaseosa + galletas + atun + arvejas;
```

Esto calcula el total de la compra.

---

### 3. Acumulación de valores

Se suman varios productos para obtener un resultado final.

```javascript
let valorTotal = yogurt + gaseosa + galletas + atun + arvejas;
```

---

### 4. Variables de comparación

Se utiliza una variable para comparar el dinero disponible con el gasto:

```javascript
let resultado = bono - valorTotal;
```

- Si el resultado es positivo → sobra dinero  
- Si es negativo → falta dinero  

---

### 5. Condicionales (if - else)

Permiten tomar decisiones según una condición.

```javascript
if (resultado >= 0) {
  // el bono alcanza
} else {
  // el bono no alcanza
}
```

---

### 6. Valor absoluto (Math.abs)

La función `Math.abs()` convierte un número negativo en positivo.

```javascript
Math.abs(resultado)
```

Se usa para mostrar cuánto dinero falta sin signo negativo.

---

### 7. Construcción de texto dinámico

Se crea una variable para construir todo el contenido HTML:

```javascript
let salida = "";
salida += "Yogurt: $" + yogurt + "<br>";
```

El operador `+=` permite agregar texto progresivamente.

---

### 8. Manipulación del DOM

Se muestra el resultado en la página web:

```javascript
document.getElementById("resultado").innerHTML = salida;
```

Esto inserta el contenido en el HTML.

---

### 9. Consola del navegador

También se muestra la información en la consola:

```javascript
console.log(salida);
```

Sirve para depurar y ver resultados internos.

---

## Flujo del programa

1. Se definen los precios de los productos  
2. Se define el valor del bono  
3. Se calcula el total de la compra  
4. Se compara con el bono  
5. Se construye el mensaje de salida  
6. Se muestra el resultado en pantalla y consola  

---

## Estructura del proyecto

```
proyecto/
│── index.html   → Interfaz del usuario
│── app.js       → Lógica en JavaScript
```

---

## Posibles mejoras

- Permitir que el usuario elija los productos  
- Usar inputs en lugar de valores fijos  
- Mostrar los productos en una tabla  
- Aplicar estilos con CSS  
- Validar diferentes tipos de bonos  

---

## Conclusión

Este ejercicio permite comprender:

- Uso de variables para almacenar datos  
- Realización de operaciones matemáticas  
- Uso de condicionales para tomar decisiones  
- Manipulación del DOM para mostrar resultados  
- Construcción de contenido dinámico  

Es una base importante para desarrollar sistemas de compra, facturación o validación de pagos.

---

## Autor

Proyecto realizado como práctica de aprendizaje en JavaScript.