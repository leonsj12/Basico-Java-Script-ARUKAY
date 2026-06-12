# Proyecto: Filtrado y Transformación de Datos de Estudiantes

Este proyecto es una práctica de JavaScript que permite trabajar con una base de datos de estudiantes utilizando arreglos de objetos y métodos modernos como `filter()` y `map()`.

El objetivo es aprender a buscar información específica, extraer datos y transformar registros sin modificar la información original.

---

## ¿Qué hace este proyecto?

El sistema:

* Almacena información de varios estudiantes
* Filtra estudiantes según su estatura
* Filtra estudiantes según su peso
* Obtiene las calificaciones de tecnología
* Genera nuevas calificaciones sumando puntos adicionales
* Muestra los resultados en pantalla y en consola

---

## Conceptos fundamentales

### 1. Arreglos de objetos

Un arreglo de objetos permite almacenar múltiples registros organizados.

Ejemplo:

```javascript
const estudiantes = [
  {
    nombre: "Valeria",
    estatura: 1.64,
    peso: 55.1,
    tecnC: 4.8
  }
];
```

Cada objeto representa un estudiante y sus características.

---

### 2. Propiedades de un objeto

Las propiedades contienen la información de cada estudiante.

```javascript
{
  nombre: "Valeria",
  apellido: "Aranda",
  estatura: 1.64,
  peso: 55.1,
  tecnC: 4.8
}
```

Cada dato puede ser consultado individualmente.

---

### 3. Método filter()

El método `filter()` permite seleccionar elementos que cumplen una condición.

Sintaxis:

```javascript
arreglo.filter(elemento => condición)
```

Ejemplo:

```javascript
const estaturaMayor = estudiantes.filter(
  estudiante => estudiante.estatura > 1.60
);
```

Este filtro devuelve únicamente los estudiantes con estatura superior a 1.60 metros.

---

### 4. Filtrado por estatura

Se utiliza una condición numérica para seleccionar estudiantes.

```javascript
estudiante.estatura > 1.60
```

Resultado:

```javascript
Valeria
Tyler
Laura
Camilo
```

---

### 5. Filtrado por peso

También es posible filtrar usando valores menores o iguales.

```javascript
const pesoMenor = estudiantes.filter(
  estudiante => estudiante.peso <= 54
);
```

Esto devuelve únicamente los estudiantes que cumplen esa condición.

---

### 6. Método map()

El método `map()` crea un nuevo arreglo transformando cada elemento.

Sintaxis:

```javascript
arreglo.map(elemento => transformación)
```

A diferencia de `filter()`, no elimina elementos, sino que los modifica o extrae información.

---

### 7. Extraer información con map()

Se pueden obtener únicamente las notas de los estudiantes.

```javascript
const calificaciones = estudiantes.map(
  estudiante => estudiante.tecnC
);
```

Resultado:

```javascript
[4.8, 4.5, 4.0, 4.7, 3.9, 4.6]
```

---

### 8. Transformar datos con map()

También se pueden crear nuevos objetos.

```javascript
const nuevasNotas = estudiantes.map(estudiante => ({
  nombre: estudiante.nombre,
  nuevaNota: estudiante.tecnC + 0.2
}));
```

Resultado:

```javascript
[
  { nombre: "Valeria", nuevaNota: 5.0 },
  { nombre: "Tyler", nuevaNota: 4.7 }
]
```

El arreglo original permanece intacto.

---

### 9. Funciones flecha (Arrow Functions)

Las funciones flecha son una forma moderna y compacta de escribir funciones.

Ejemplo:

```javascript
estudiante => estudiante.estatura > 1.60
```

Equivale a:

```javascript
function(estudiante){
  return estudiante.estatura > 1.60;
}
```

---

### 10. Recorrer arreglos con forEach()

El método `forEach()` permite ejecutar acciones sobre cada elemento.

```javascript
estaturaMayor.forEach(estudiante => {
  console.log(estudiante.nombre);
});
```

Es útil para mostrar resultados.

---

### 11. Manipulación del DOM

El DOM representa la estructura de la página web.

```javascript
const resultado = document.getElementById("resultado");
```

Permite acceder a elementos HTML desde JavaScript.

---

### 12. innerHTML

La propiedad `innerHTML` permite insertar contenido HTML dinámicamente.

```javascript
resultado.innerHTML += "<h2>Calificaciones</h2>";
```

Esto agrega información a la página sin reemplazar el contenido existente.

---

### 13. Consola del navegador

La consola ayuda a visualizar información durante el desarrollo.

```javascript
console.log(calificaciones);
```

Permite verificar datos y resultados de los filtros.

---

## Diferencia entre filter() y map()

### filter()

Selecciona algunos elementos.

```javascript
const mayores = estudiantes.filter(
  estudiante => estudiante.estatura > 1.60
);
```

Resultado:

```javascript
Solo los estudiantes que cumplen la condición
```

---

### map()

Transforma todos los elementos.

```javascript
const nombres = estudiantes.map(
  estudiante => estudiante.nombre
);
```

Resultado:

```javascript
["Valeria", "Tyler", "Adrian", "Laura"]
```

---

## Flujo del programa

1. Se crea la base de datos de estudiantes
2. Se obtiene el contenedor HTML
3. Se filtran estudiantes por estatura
4. Se filtran estudiantes por peso
5. Se obtienen las calificaciones
6. Se generan nuevas notas
7. Se muestran los resultados en pantalla y consola

---

## Estructura del proyecto

```text
proyecto/
│── index.html   → Interfaz de usuario
│── app.js       → Lógica del programa
```

---

## Posibles mejoras

* Calcular promedio de notas
* Ordenar estudiantes por calificación
* Buscar estudiantes por nombre
* Mostrar resultados en tablas
* Permitir agregar estudiantes dinámicamente

---

## Conclusión

Este ejercicio permite comprender:

* Arreglos de objetos
* Métodos de filtrado con `filter()`
* Transformación de datos con `map()`
* Recorrido de arreglos con `forEach()`
* Funciones flecha
* Manipulación del DOM

Estos conceptos son fundamentales para trabajar con grandes cantidades de información en aplicaciones web modernas.

---

## Autor

Proyecto realizado como práctica de aprendizaje en JavaScript.
