/**
 * Clase Animal
 * Representa un animal genérico con un nombre y una edad.
 */
export class Animal {
  /**
   * Constructor de la clase Animal
   * @param name Nombre del animal
   * @param age Edad del animal
   */
  constructor(
    public name: string,
    public age: number,
  ) {}

  /**
   * Método move
   * Simula el movimiento del animal.
   */
  move() {
    console.log('Moving...');
  }

  /**
   * Método greeting
   * Devuelve un mensaje de saludo con el nombre y la edad del animal.
   * @returns {string} Mensaje de saludo
   */
  greeting(): string {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
  }
}

/**
 * Clase Dog
 * Representa un perro, que es una especialización de la clase Animal.
 */
export class Dog extends Animal {
  /**
   * Constructor de la clase Dog
   * @param name Nombre del perro
   * @param age Edad del perro
   * @param breed Raza del perro
   */
  constructor(
    name: string,
    age: number,
    public breed: string,
  ) {
    super(name, age); // Llama al constructor de la clase padre (Animal)
  }

  /**
   * Método move
   * Sobrescribe el método move de la clase Animal para simular que el perro corre.
   */
  move() {
    console.log('Running...');
  }

  /**
   * Método greeting
   * Sobrescribe el método greeting de la clase Animal para incluir la raza del perro.
   * @returns {string} Mensaje de saludo específico del perro
   */
  greeting(): string {
    return `Woof! I'm ${this.name} and I'm ${this.age} years old, and I'm a ${this.breed}`;
  }

  /**
   * Método woof
   * Simula el ladrido del perro un número específico de veces.
   * @param times Número de veces que el perro ladra
   */
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

// Ejemplo de uso de la clase Animal
const fifi = new Animal('Fifí', 5);
fifi.move(); // Muestra "Moving..."
console.log(fifi.greeting()); // Muestra "Hello, I'm Fifí and I'm 5 years old"

// Ejemplo de uso de la clase Dog
const Hanna = new Dog('Hanna', 16, 'Golden Retriever');
Hanna.move(); // Muestra "Running..."
console.log(Hanna.greeting()); // Muestra "Woof! I'm Hanna and I'm 16 years old, and I'm a Golden Retriever"
Hanna.woof(3); // Muestra "Woof!" tres veces
console.log(Hanna.breed); // Muestra "Golden Retriever"