# Proyecto de Programación Orientada a Objetos (POO) con TypeScript

Este proyecto está diseñado para aprender y practicar los conceptos fundamentales de la **Programación Orientada a Objetos (POO)** utilizando **TypeScript**. Incluye ejemplos prácticos de clases, herencia, getters, setters y manipulación de fechas.

## Descripción

El código implementa varias clases que demuestran los principios de POO, como encapsulación, herencia y polimorfismo. Este proyecto es ideal para quienes están comenzando a aprender POO y desean mejorar sus habilidades con TypeScript.

### Características principales:
- **Clases y atributos**: Definición de clases con atributos públicos y privados.
- **Métodos**:
  - `printFormat`: Devuelve la fecha en formato `día/mes/año`.
  - `add`: Permite sumar días, meses o años a la fecha.
  - `isValidDate`: Valida si la fecha actual es válida.
- **Herencia**:
  - Clases como `Animal` y `Dog` demuestran cómo extender funcionalidades.
- **Getters y Setters**:
  - Uso de getters para acceder a propiedades calculadas.
  - Uso de setters para validar y modificar atributos.
- **Uso de la clase `Date` de JavaScript**: Aprovecha las capacidades nativas de JavaScript para manejar fechas y evitar errores.

## Archivos incluidos

- `02-metodos.ts`: Contiene la implementación de la clase `MyDate` y ejemplos de uso.
- `06-getters.ts`: Ejemplo de uso de getters para calcular propiedades como si un año es bisiesto.
- `07-setters.ts`: Ejemplo de uso de setters para validar valores antes de asignarlos.
- `08-inheritance.ts`: Ejemplo de herencia con las clases `Animal` y `Dog`.

## Ejemplo de uso

### Clase `MyDate`
```typescript
import { MyDate } from './02-metodos';

const myDate = new MyDate(1996, 6, 29);
console.log(myDate.printFormat()); // Salida: "29/6/1996"

myDate.add(4, 'days');
console.log(myDate.printFormat()); // Salida: "3/7/1996"

console.log(myDate.isValidDate()); // Salida: true
```

### Clase `Dog` (Herencia)
```typescript
import { Dog } from './08-inheritance';

const Hanna = new Dog('Hanna', 16, 'Golden Retriever');
Hanna.move(); // Salida: "Running..."
console.log(Hanna.greeting()); // Salida: "Woof! I'm Hanna and I'm 16 years old, and I'm a Golden Retriever"
Hanna.woof(3); // Salida: "Woof!" tres veces
```

### Uso de Getters y Setters
```typescript
import { MyDate } from './07-setters';

const myDate = new MyDate(1996, 7, 29);
console.log(myDate.month); // Salida: 7

myDate.month = 13; // Lanza un error: "El mes debe estar entre 1 y 12"
console.log(myDate.month); // Salida: 7 (no se actualizó debido al error)
```

## Requisitos

- **Node.js**: Asegúrate de tener instalado Node.js para ejecutar los ejemplos.
- **TypeScript**: Instala TypeScript globalmente si aún no lo tienes:
  ```bash
  npm install -g typescript
  ```

## Cómo ejecutar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/poo-typescript.git
   cd poo-typescript
   ```

2. Compila los archivos TypeScript:
   ```bash
   tsc
   ```

3. Ejecuta los archivos compilados:
   ```bash
   node dist/02-metodos.js
   ```

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de abrir un **pull request** o reportar problemas en la sección de **issues**.

---
¡Gracias por explorar este proyecto! 😊