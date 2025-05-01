export class Animal {
  constructor(
    protected name: string,
    public age: number,
  ) {}

  move() {
    console.log('Moving...');
  }

  greeting(): string {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
  }

  protected doSomething() {
    console.log(`DOoooooooohhhhh`);
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

  greeting(): string {
    return `Woof! I'm ${this.name} and I'm ${this.age} years old, and I'm a ${this.breed}`;
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('Moving as a dog');
    super.move();
  }

}



const Hanna = new Dog('Hanna', 16, 'Golden Retriever');

// Hanna.name = 'otro nombre'; 
Hanna.woof(3);
Hanna.move(); // Muestra "Moving as a dog" y luego "Moving..."


