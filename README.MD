# Proyecto de Programación Orientada a Objetos (POO) con TypeScript

Este proyecto está diseñado para aprender y practicar los conceptos fundamentales de la **Programación Orientada a Objetos (POO)** utilizando **TypeScript**. Incluye ejemplos prácticos de clases, métodos y manipulación de fechas.

## Descripción

El código implementa una clase llamada `MyDate`, que representa una fecha personalizada con atributos y métodos para manipularla. Este proyecto es ideal para quienes están comenzando a aprender POO y desean mejorar sus habilidades con TypeScript.

### Características principales:
- **Clases y atributos**: Definición de una clase con atributos como `year`, `month` y `day`.
- **Métodos**:
  - `printFormat`: Devuelve la fecha en formato `día/mes/año`.
  - `add`: Permite sumar días, meses o años a la fecha.
  - `isValidDate`: Valida si la fecha actual es válida.
- **Uso de la clase `Date` de JavaScript**: Aprovecha las capacidades nativas de JavaScript para manejar fechas y evitar errores.

## Archivos incluidos

- `02-metodos.ts`: Contiene la implementación de la clase `MyDate` y ejemplos de uso.

## Ejemplo de uso

```typescript
// Importar la clase MyDate
import { MyDate } from './02-metodos';

// Crear una instancia de la clase MyDate
const myDate = new MyDate(1996, 6, 29); // Fecha inicial: 29 de junio de 1996

// Mostrar la fecha formateada
console.log(myDate.printFormat()); // Salida: "29/6/1996"

// Sumar días a la fecha
myDate.add(4, 'days');
console.log(myDate.printFormat()); // Salida: "3/7/1996"

// Validar si la fecha es válida
console.log(myDate.isValidDate()); // Salida: true