export class Animal {
  constructor(
    public name: string,
    public age: number,
  ) {}

  move() {
    console.log('Moving...');
  }

  greeting(): string { // Cambiado para devolver el mensaje
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    age: number,
    public breed: string,
  ) {
    super(name, age);
  }

  move() {
    console.log('Running...');
  }

  greeting(): string { // Cambiado para devolver el mensaje
    return `Woof! I'm ${this.name} and I'm ${this.age} years old, and I'm a ${this.breed}`;
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('Fifí', 5);
fifi.move();
console.log(fifi.greeting()); // Ahora imprime el mensaje correctamente

const Hanna = new Dog('Hanna', 16, 'Golden Retriever');
Hanna.move();
console.log(Hanna.greeting()); // Ahora imprime el mensaje correctamente
Hanna.woof(3);
console.log(Hanna.breed);