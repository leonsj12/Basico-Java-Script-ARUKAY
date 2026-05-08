# Proyecto: Base de Datos de Estudiantes

Este proyecto es una práctica de JavaScript que simula una pequeña base de datos de estudiantes. Permite almacenar información, filtrar datos y mostrar resultados dinámicamente en una página web.

---

## ¿Qué hace este proyecto?

El sistema:

- Guarda información de varios estudiantes  
- Filtra estudiantes por curso  
- Filtra estudiantes por edad  
- Filtra estudiantes por ciudad  
- Muestra resultados en pantalla y consola  

---

## Conceptos fundamentales

### 1. Arreglos (Arrays)

Un **arreglo** es una estructura que permite almacenar múltiples elementos dentro de una sola variable.

```javascript
const estudiantes = [];
```

En este caso, el arreglo almacena varios estudiantes.

---

### 2. Objetos

Un **objeto** permite guardar información organizada mediante propiedades.

Ejemplo:

```javascript
{
  nombre: "Juan",
  apellido: "Pérez",
  ciudad: "Bogotá"
}
```

Cada estudiante es un objeto con información personal.

---

### 3. Arreglo de objetos

Es un arreglo que contiene múltiples objetos.

```javascript
const estudiantes = [
  {
    nombre: "Juan",
    curso: "8A"
  },
  {
    nombre: "María",
    curso: "8B"
  }
];
```

Es una estructura muy utilizada en aplicaciones web y bases de datos.

---

### 4. Método filter()

El método `filter()` permite crear un nuevo arreglo con elementos que cumplen una condición.

```javascript
const grupo8A = estudiantes.filter(
  estudiante => estudiante.curso === "8A"
);
```

Esto filtra únicamente los estudiantes del curso 8A.

---

### 5. Funciones flecha (Arrow Functions)

Las funciones flecha son una forma corta de escribir funciones.

```javascript
estudiante => estudiante.curso === "8A"
```

Equivale a:

```javascript
function(estudiante){
  return estudiante.curso === "8A";
}
```

---

### 6. Comparación estricta (===)

El operador `===` compara valor y tipo de dato.

```javascript
estudiante.curso === "8A"
```

Esto asegura comparaciones más precisas.

---

### 7. Método forEach()

El método `forEach()` recorre todos los elementos de un arreglo.

```javascript
grupo8A.forEach(estudiante => {
  console.log(estudiante.nombre);
});
```

Permite ejecutar acciones con cada elemento.

---

### 8. Manipulación del DOM

El DOM representa la estructura de la página web.

```javascript
const resultado = document.getElementById("resultado");
```

Esto selecciona el contenedor HTML donde se mostrarán los resultados.

---

### 9. innerHTML

La propiedad `innerHTML` permite insertar contenido HTML dinámicamente.

```javascript
resultado.innerHTML += "<h2>Grupo 8A</h2>";
```

El operador `+=` agrega contenido sin borrar el anterior.

---

### 10. Consola del navegador

La consola permite visualizar información útil para depuración.

```javascript
console.log(grupo8A);
```

Sirve para revisar datos y resultados internos del programa.

---

## Tipos de filtros utilizados

### Filtrar por curso

```javascript
const grupo8A = estudiantes.filter(
  estudiante => estudiante.curso === "8A"
);
```

---

### Filtrar por edad

```javascript
const mismaEdad = estudiantes.filter(
  estudiante => estudiante.edad === 14
);
```

---

### Filtrar por ciudad

```javascript
const bogota = estudiantes.filter(
  estudiante => estudiante.ciudad === "Bogotá"
);
```

---

## Flujo del programa

1. Se crea la base de datos de estudiantes  
2. Se obtiene el contenedor HTML  
3. Se filtran estudiantes según diferentes criterios  
4. Se muestran resultados en consola  
5. Se muestran resultados en la página web  

---

## Estructura del proyecto

```text
proyecto/
│── index.html   → Estructura de la página
│── app.js       → Lógica en JavaScript
```

---

## Posibles mejoras

- Agregar formulario para registrar estudiantes  
- Permitir búsquedas dinámicas  
- Mostrar resultados en tablas  
- Eliminar o editar estudiantes  
- Conectar con una base de datos real  

---

## Conclusión

Este ejercicio permite comprender:

- Cómo trabajar con arreglos de objetos  
- Cómo filtrar información usando `filter()`  
- Cómo recorrer datos con `forEach()`  
- Cómo mostrar información dinámicamente  
- Cómo organizar datos similares a una base de datos  

Es una base importante para desarrollar sistemas administrativos y aplicaciones web dinámicas.

---

## Autor

Proyecto realizado como práctica de aprendizaje en JavaScript.