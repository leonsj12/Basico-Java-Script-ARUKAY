# Proyecto: Análisis de Datos de Estudiantes con `filter()`, `map()` y `reduce()`

Este proyecto es una práctica de JavaScript donde se trabaja con una base de datos de estudiantes para realizar consultas y cálculos utilizando métodos modernos de los arreglos.

El objetivo es aprender cómo filtrar información, extraer datos y realizar operaciones matemáticas como sumas y promedios de manera sencilla y eficiente.

---

# ¿Qué hace este proyecto?

El sistema permite:

* Almacenar información de estudiantes en un arreglo de objetos.
* Separar los estudiantes por curso.
* Obtener las edades de cada curso.
* Calcular la suma de las edades.
* Calcular el promedio de la asignatura de Artes.
* Mostrar los resultados en la consola del navegador.

---

# Conceptos fundamentales

## 1. Arreglo de objetos

Un **arreglo de objetos** permite almacenar múltiples registros con diferentes propiedades.

Ejemplo:

```javascript
const estudiantes = [
  {
    nombre: "Mariana",
    apellido: "Cordero",
    edad: 13,
    curso: "8A",
    artes: 4.5
  }
];
```

Cada objeto representa un estudiante con toda su información.

---

## 2. Objetos

Un **objeto** agrupa información relacionada mediante propiedades.

```javascript
{
    nombre: "Mariana",
    edad: 13,
    curso: "8A"
}
```

Cada propiedad almacena un dato específico.

---

## 3. Método `filter()`

El método **filter()** crea un nuevo arreglo con los elementos que cumplen una condición.

Sintaxis:

```javascript
arreglo.filter(elemento => condición);
```

Ejemplo:

```javascript
const curso8A = estudiantes.filter(
    est => est.curso === "8A"
);
```

Este código obtiene únicamente los estudiantes del curso **8A**.

---

## 4. Método `map()`

El método **map()** permite transformar o extraer información de un arreglo.

Sintaxis:

```javascript
arreglo.map(elemento => transformación);
```

Ejemplo:

```javascript
const edades8A = curso8A.map(
    est => est.edad
);
```

Resultado:

```javascript
[13,14,13,13]
```

Aquí solamente se extraen las edades.

---

## 5. Método `reduce()`

El método **reduce()** permite recorrer un arreglo para obtener un único resultado.

Generalmente se utiliza para:

* sumar valores
* calcular promedios
* contar elementos
* realizar acumulaciones

Sintaxis:

```javascript
arreglo.reduce((acumulador, elemento) => operación, valorInicial);
```

Ejemplo:

```javascript
const sumaEdades = edades8A.reduce(
    (acum, edad) => acum + edad,
    0
);
```

Resultado:

```javascript
53
```

---

## 6. Acumulador

El **acumulador** es una variable que guarda el resultado parcial durante el recorrido del arreglo.

```javascript
(acum, edad) => acum + edad
```

En cada iteración:

* acum guarda la suma anterior
* edad representa el valor actual

---

## 7. Cálculo del promedio

El promedio se obtiene dividiendo la suma entre la cantidad de elementos.

```javascript
const promedio =
    sumaNotas / notas.length;
```

Donde:

* `sumaNotas` contiene la suma de todas las notas.
* `length` devuelve la cantidad de estudiantes.

---

## 8. Propiedad `length`

La propiedad **length** indica cuántos elementos tiene un arreglo.

Ejemplo:

```javascript
notas8A.length
```

Resultado:

```javascript
4
```

---

## 9. Método `toFixed()`

El método **toFixed()** limita la cantidad de decimales que se muestran.

Ejemplo:

```javascript
promedio8A.toFixed(2);
```

Resultado:

```
4.30
```

Esto mejora la presentación del resultado.

---

## 10. Consola del navegador

Los resultados se muestran utilizando:

```javascript
console.log();
```

Ejemplo:

```javascript
console.log(promedio8A);
```

La consola es una herramienta muy utilizada para depurar programas y verificar resultados.

---

# Uso combinado de métodos

Uno de los objetivos del ejercicio es aprender a combinar varios métodos.

## Paso 1

Filtrar un curso.

```javascript
const curso8A =
estudiantes.filter(est => est.curso === "8A");
```

↓

## Paso 2

Extraer las notas.

```javascript
const notas =
curso8A.map(est => est.artes);
```

↓

## Paso 3

Sumar todas las notas.

```javascript
const suma =
notas.reduce(
(acum, nota)=>acum+nota,
0
);
```

↓

## Paso 4

Calcular el promedio.

```javascript
const promedio =
suma / notas.length;
```

Este flujo de trabajo es muy común cuando se analizan datos en JavaScript.

---

# Flujo del programa

1. Se crea la base de datos de estudiantes.
2. Se filtran los estudiantes por curso.
3. Se extraen las edades.
4. Se suman las edades utilizando `reduce()`.
5. Se extraen las notas de Artes.
6. Se calcula el promedio.
7. Se muestran todos los resultados en la consola.


# Estructura del proyecto

```text
proyecto/
│── index.html   → Página principal
│── app.js       → Lógica del programa
```


# Posibles mejoras

* Mostrar los resultados en el HTML en lugar de la consola.
* Calcular el promedio general de todos los cursos.
* Encontrar la nota más alta y la más baja.
* Buscar estudiantes por nombre.
* Ordenar estudiantes por promedio.
* Calcular estadísticas de cada curso automáticamente.


# Conclusión

Este ejercicio permite comprender:

* Cómo trabajar con arreglos de objetos.
* Cómo seleccionar información utilizando `filter()`.
* Cómo transformar datos mediante `map()`.
* Cómo realizar cálculos con `reduce()`.
* Cómo calcular sumas y promedios.
* Cómo utilizar la propiedad `length`.
* Cómo presentar resultados con `toFixed()`.
* Cómo combinar varios métodos de los arreglos para resolver problemas de análisis de datos.

Estos métodos (`filter()`, `map()` y `reduce()`) forman parte de las herramientas más importantes de JavaScript moderno y son ampliamente utilizados en aplicaciones web, análisis de información y desarrollo de software.


