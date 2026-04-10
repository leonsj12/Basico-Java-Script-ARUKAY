# Proyecto: Estructuras Condicionales en JavaScript
Este proyecto es una práctica de JavaScript enfocada en el uso de estructuras condicionales. Permite tomar decisiones basadas en datos ingresados por el usuario mediante `prompt()`.

**¿Qué hace este proyecto?**
El sistema contiene tres ejercicios:

1. Validación de edad para ingresar a un lugar  
2. Aplicación de descuentos según un color  
3. Consulta de precios de frutas usando `switch`  

## Conceptos fundamentales

### 1. prompt()

La función `prompt()` permite solicitar información al usuario.

```javascript
let edad = prompt("Ingrese su edad:");
```

El valor ingresado se guarda en una variable.


### 2. Condicional if

El `if` permite ejecutar código si una condición es verdadera.

```javascript
if (edad >= 18) {
  document.write("Bienvenido");
}
```

### 3. Condicional if - else

Permite ejecutar una acción si se cumple la condición y otra si no.

```javascript
if (edad >= 18) {
  document.write("Bienvenido");
} else {
  document.write("No puedes ingresar");
}
```

### 4. Condicional if - else if - else

Se usa cuando hay múltiples condiciones.

```javascript
if (color === "amarilla") {
  document.write("50% de descuento");
} else if (color === "morada") {
  document.write("30% de descuento");
} else {
  document.write("Sin descuento");
}
```


### 5. Comparación estricta (===)

El operador `===` compara valor y tipo de dato.

```javascript
color === "amarilla"
```

Es más seguro que usar `==`.


### 6. Métodos de texto (toLowerCase)

Convierte texto a minúsculas para evitar errores en comparaciones.

```javascript
color = color.toLowerCase();
```

Esto permite que "Amarilla", "AMARILLA" o "amarilla" funcionen igual.


### 7. Switch

El `switch` se usa para evaluar múltiples opciones de forma organizada.

```javascript
switch (fruta) {
  case "manzana":
    precio = 3000;
    break;
  case "pera":
    precio = 2500;
    break;
  default:
    precio = null;
}
```


### 8. Break

La palabra `break` detiene la ejecución dentro del `switch`.

Si no se usa, el programa seguirá ejecutando los siguientes casos.

### 9. Valores nulos (null)

Se usa `null` para indicar que no hay valor válido.

```javascript
precio = null;
```

### 10. Validación de resultados

Se verifica si el valor existe antes de mostrarlo:

```javascript
if (precio !== null) {
  document.write("Precio: $" + precio);
} else {
  document.write("Fruta no disponible");
}
```

### 11. Salida en pantalla

Se usa `document.write()` para mostrar resultados:

```javascript
document.write("Mensaje");
```

## Flujo del programa

### Ejercicio 1

1. El usuario ingresa su edad  
2. Se valida si es mayor o igual a 18  
3. Se muestra si puede ingresar o no  

### Ejercicio 2

1. El usuario ingresa un color  
2. Se convierte a minúscula  
3. Se aplica un descuento según el color  

### Ejercicio 3

1. El usuario ingresa una fruta  
2. Se evalúa con `switch`  
3. Se asigna un precio  
4. Se muestra el resultado  

## Estructura del proyecto

```
proyecto/
│── index.html   → Estructura básica
│── app.js       → Lógica en JavaScript
```


## Posibles mejoras

- Validar que el usuario ingrese datos correctos  
- Mostrar resultados en HTML en lugar de document.write  
- Usar formularios en lugar de prompt  
- Agregar más opciones en el menú  
- Mejorar la interfaz con CSS  


## Conclusión

Este ejercicio permite comprender:

- Uso de estructuras condicionales  
- Diferencia entre if, else y else if  
- Uso de switch para múltiples opciones  
- Comparación de valores  
- Validación de datos del usuario  

Es una base fundamental para tomar decisiones en programas más complejos.
