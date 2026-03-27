# Proyecto: Objetos en JavaScript con Prompt

Este proyecto es una práctica de JavaScript donde se utilizan objetos junto con la función `prompt()` para capturar datos ingresados por el usuario y mostrarlos en pantalla.

**¿Qué hace este proyecto?**

El sistema permite:

- Solicitar información al usuario mediante ventanas emergentes  
- Crear objetos con esos datos  
- Mostrar la información en la página web  

Se trabajan tres tipos de objetos:

- Objeto literal  
- Objeto en múltiples líneas  
- Objeto creado con constructor  
**Conceptos fundamentales**

***1. ¿Qué es prompt()?***

La función `prompt()` permite solicitar información al usuario mediante una ventana emergente.

```javascript
let nombre = prompt("Ingrese su nombre:");
```

- Muestra un cuadro de diálogo  
- El usuario escribe un valor  
- Ese valor se guarda en una variable  
***2. Variables***

Las **variables** almacenan los datos ingresados por el usuario.

```javascript
let marca = prompt("Ingrese la marca del celular:");
```

Cada dato ingresado se guarda para luego usarlo.
***3. Objetos***

Un **objeto** es una estructura que permite agrupar información en forma de clave y valor.

```javascript
const celular = {
  marca: marca,
  modelo: modelo
};
```

Esto permite organizar los datos del usuario.
***4. Objeto literal***

Es la forma más común de crear objetos:

```javascript
const celular = {
  marca: marca,
  modelo: modelo,
  almacenamiento: almacenamiento,
  color: color,
  precio: precio
};
```
***5. Objeto en múltiples líneas***

Permite escribir el objeto de forma organizada:

```javascript
const prenda = {
  tipo: tipo,
  talla: talla,
  color: colorPrenda,
  material: material,
  marca: marcaPrenda
};
```
***6. Objeto con constructor***

Otra forma de crear objetos es usando `new Object()`:

```javascript
const persona = new Object();

persona.nombre = nombre;
persona.edad = edad;
persona.ciudad = ciudad;
persona.profesion = profesion;
persona.telefono = telefono;
```

---

***7. Acceso a propiedades***

Se puede acceder a los datos de dos formas:

***Notación de punto***

```javascript
celular.marca
```

*** Notación de corchetes ***

```javascript
celular["precio"]
```
***8. Mostrar información en pantalla***

Se utiliza `document.write()` para mostrar contenido en la página:

```javascript
document.write("Marca: " + celular.marca + "<br>");
```

Esto imprime directamente en el HTML.

***9. Concatenación de texto***

Se usa el operador `+` para unir texto y variables:

```javascript
"Marca: " + celular.marca
```
**Flujo del programa**

1. Se solicitan datos al usuario con prompt()  
2. Se guardan en variables  
3. Se crean objetos con esos datos  
4. Se accede a sus propiedades  
5. Se muestran los resultados en pantalla  
**Estructura del proyecto**

```
proyecto/
│── index.html   → Estructura de la página
│── app.js       → Lógica en JavaScript
```
**Posibles mejoras**

- Validar que los datos no estén vacíos  
- Mostrar la información en un contenedor en lugar de document.write  
- Usar formularios en HTML en lugar de prompt  
- Aplicar estilos con CSS  
- Guardar los datos en un arreglo  
**Conclusión**

Este ejercicio permite comprender:

- Cómo capturar datos con prompt()  
- Cómo crear objetos con información del usuario  
- Cómo acceder a propiedades de objetos  
- Cómo mostrar datos dinámicamente  

Es una base importante para trabajar con datos en aplicaciones interactivas.
