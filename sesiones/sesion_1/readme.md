# Proyecto: Mi Hobby Favorito

Este proyecto es una introducción práctica al desarrollo web usando HTML, CSS y JavaScript. Su objetivo principal es aprender conceptos básicos de programación en JavaScript mediante una aplicación sencilla e interactiva.



## ¿Qué hace este proyecto?

La página muestra un botón que, al hacer clic, despliega información sobre un hobby (en este caso, dibujar), incluyendo:

- Nombre del hobby  
- Descripción  
- Lista de materiales necesarios  

Esto permite entender cómo JavaScript puede interactuar con una página web.



## Conceptos aprendidos

### 1. Variables en JavaScript

Las variables permiten almacenar información. En este proyecto se usan para guardar:

- El nombre del hobby  
- Una descripción  
- Una lista de materiales  

```javascript
let hobby = "Dibujar";
let descripcion = "Me gusta dibujar porque es divertido y puedo crear lo que imagino.";
```



### 2. Arreglos (Arrays)

Un arreglo es una colección de datos. Aquí se usa para almacenar materiales:

```javascript
let materiales = ["Lápiz", "Cuaderno", "Borrador", "Colores", "Sacapuntas"];
```



### 3. Funciones

Una función es un bloque de código que se ejecuta cuando se necesita.

```javascript
function mostrarHobby() {
    // código que se ejecuta al hacer clic
}
```



### 4. Eventos (onclick)

Se usa el evento `onclick` en HTML para ejecutar la función cuando el usuario hace clic en un botón:

```html
<button onclick="mostrarHobby()">Mostrar mi hobby</button>
```



### 5. Manipulación del DOM

El DOM (Document Object Model) permite modificar el contenido de la página con JavaScript.

```javascript
document.getElementById("resultado").innerHTML = texto;
```

Esto permite mostrar información dinámica en la web.



### 6. Estructuras de control (for)

Se utiliza un ciclo `for` para recorrer el arreglo de materiales:

```javascript
for (let i = 0; i < materiales.length; i++) {
    texto += "<li>" + materiales[i] + "</li>";
}
```



## Estructura del proyecto

```
proyecto/
│── index.html   → Estructura de la página
│── style.css    → Estilos visuales
│── app.js       → Lógica en JavaScript
```



## Tecnologías utilizadas

- HTML → estructura  
- CSS → estilos  
- JavaScript → interactividad  


## Posibles mejoras

Algunas ideas para seguir aprendiendo:

- Usar addEventListener en lugar de onclick
- Separar mejor el HTML del JavaScript
- Agregar más hobbies dinámicos
- Permitir que el usuario ingrese su propio hobby



## Conclusión

Este ejercicio demuestra cómo:

- JavaScript puede interactuar con HTML  
- Se pueden usar variables y arreglos para manejar datos  
- Es posible crear contenido dinámico en una página web  

Es una base sólida para comenzar a desarrollar aplicaciones más complejas.



## Autor

Proyecto realizado como práctica de aprendizaje en JavaScript.
