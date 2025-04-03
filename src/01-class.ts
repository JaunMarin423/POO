// Conceptos Básicos de POO
// Clase: Una clase es un modelo o plantilla que define las características y comportamientos de un objeto. Es como un molde que se utiliza para crear objetos.
// Objeto: Un objeto es una entidad que tiene propiedades (atributos) y métodos (acciones que puede realizar). Cada objeto es una representación única de una clase.
// Instancia: Una instancia es un objeto creado a partir de una clase. Cada instancia tiene sus propias características (atributos) y puede realizar las acciones definidas por la clase (métodos).

// Ejemplo de uso de la clase Date (nativa de JavaScript)
const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(2025, 3, 3);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

// Clase personalizada MyDate
// Explicación de Instancia:
// Una instancia no es una sección de la clase, sino un objeto independiente creado a partir de ella. Cada instancia tiene su propio conjunto de atributos y métodos, que pueden variar entre instancias.

export class MyDate {
    // Atributos de la clase MyDate
    year: number;
    month: number;
    day: number;

    // Constructor: Método especial para inicializar una instancia de la clase
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

// Creación de una instancia de la clase MyDate
const myDate = new MyDate(2025, 3, 2);
console.log(myDate);

// Ejemplo para Clarificar
// Imagina que tienes una clase llamada Coche. Esta clase define características como marca, modelo, color, y métodos como arrancar() o acelerar().

// Clase Coche:
// Atributos: marca, modelo, color
// Métodos: arrancar(), acelerar()

// Ahora, si creas dos objetos (instancias) de la clase Coche, podrías tener:

// Instancia 1 (MiCoche1):
// Marca: Toyota
// Modelo: Corolla
// Color: Azul
// Puede arrancar y acelerar

// Instancia 2 (MiCoche2):
// Marca: Honda
// Modelo: Civic
// Color: Rojo
// También puede arrancar y acelerar

// Ambas instancias (MiCoche1 y MiCoche2) son objetos independientes, cada uno con sus propias características, pero ambos pueden realizar las acciones definidas por la clase Coche.

// Otros Nombres para Instancia
// Aunque "instancia" es el término más común, también puedes referirte a ella como:
// Objeto: Es el término más genérico para referirse a una instancia.
// Ejemplar: Se utiliza para enfatizar que es un ejemplo específico de una clase.
// Entidad: Aunque es más genérico, puede usarse para referirse a una instancia en contextos específicos.

// Resumen
// Clase: Es el modelo o plantilla.
// Instancia (o Objeto): Es un ejemplo específico creado a partir de la clase, con sus propias características y comportamientos.