# Sistema de evaluación del estudiante

Este proyecto es una práctica básica de JavaScript donde se simula un sistema de evaluación de notas. Permite entender cómo usar variables, funciones, condicionales y manipulación del DOM para mostrar resultados dinámicos en una página web.

**¿Qué hace este programa?**

El sistema guarda varias notas de un estudiante y, al hacer clic en un botón, muestra si cada materia es aprobada o no.

Se consideran aprobadas las notas mayores o iguales a 70.



**Conceptos fundamentales de JavaScript**

***¿Qué es JavaScript?***

JavaScript es el lenguaje que da interactividad a las páginas web.

Se puede entender así:

- HTML: estructura  
- CSS: apariencia  
- JavaScript: lógica e inteligencia  

JavaScript permite:

- Guardar información  
- Tomar decisiones  
- Responder a eventos (clics)  
- Modificar el contenido de la página  

**1. Variables**

Una variable es un espacio donde se guarda información.

Sintaxis:

```javascript
let nombreVariable = valor;
```

Ejemplo del proyecto:

```javascript
let matematicas = 75;
let lenguaje = 70;
let ingles = 85;
let biologia = 60;
let sociales = 72;
let tecnologia = 90;
```

**2. Funciones**

Una función es un bloque de código que se ejecuta cuando se llama.

Sintaxis:

```javascript
function nombreFuncion() {
    // código
}
```

Ejemplo:

```javascript
function mostrarResultados() {
    // lógica del programa
}
```

Esta función se ejecuta cuando el usuario hace clic en el botón.

**3. Operador ternario**

El operador ternario permite tomar decisiones de forma corta.

Sintaxis:

```javascript
condicion ? valor_si_verdadero : valor_si_falso
```

Ejemplo:

```javascript
let resMat = matematicas >= 70 ? "Aprueba" : "No Aprueba";
```

Esto significa:

- Si la nota es mayor o igual a 70 → Aprueba  
- Si no → No Aprueba  

**4. Construcción de texto dinámico**

Se crea una variable para construir el contenido que se mostrará en pantalla.

```javascript
let texto = "<h2>Resultados del estudiante:</h2>";

texto += "Matemáticas: " + resMat + "<br>";
texto += "Lenguaje: " + resLen + "<br>";
```

Aquí se combina texto HTML con JavaScript.



**5. Manipulación del DOM**

El DOM representa la estructura de la página web.

JavaScript puede modificarla usando:

```javascript
document.getElementById("resultado").innerHTML = texto;
```

Esto significa:

- Buscar el elemento con id "resultado"  
- Insertar contenido dentro de él  

**6. Evento onclick**

El botón en HTML ejecuta la función cuando el usuario hace clic:

```html
<button onclick="mostrarResultados()">
    Mostrar resultados
</button>
```

Esto conecta el HTML con JavaScript.

**Flujo del programa**

1. Se definen las notas en variables  
2. El usuario hace clic en el botón  
3. Se ejecuta la función mostrarResultados()  
4. Se evalúan las notas con el operador ternario  
5. Se construye un texto con los resultados  
6. Se muestra el resultado en la página  

**Estructura del proyecto**

```
proyecto/
│── index.html   → Estructura de la página
│── app.js       → Lógica en JavaScript
```

**Posibles mejoras**

- Permitir ingresar las notas desde el usuario  
- Calcular el promedio automáticamente  
- Mostrar colores según aprobación o reprobación  
- Usar addEventListener en lugar de onclick  

**Conclusión**

Este ejercicio permite comprender los fundamentos de JavaScript:

- Uso de variables para almacenar datos  
- Uso de funciones para organizar el código  
- Uso de condicionales para tomar decisiones  
- Interacción con el usuario mediante eventos  
- Manipulación del contenido HTML  

Es una base importante para avanzar hacia proyectos más complejos en desarrollo web.


**Autor**

Proyecto realizado como práctica de aprendizaje en JavaScript.