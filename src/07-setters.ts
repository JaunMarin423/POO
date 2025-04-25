export class MyDate {
  constructor(
    public year: number, 
    private _month: number,
    private _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    if (this._day == 29) {
      return console.log('El día es 29');
    }
    return null;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true; 
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newMonth: number) {
    try {
      if (newMonth < 1 || newMonth > 12) {
        throw new Error('El mes debe estar entre 1 y 12');
      }
      this._month = newMonth;
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {"`error` como un objeto de tipo `Error`"
        console.error((error as { message: string }).message); // Acceder a `message` de forma segura   console.error(error.message); // Captura y muestra el mensaje del error
      } else {
        console.error('Ocurrió un error desconocido');       console.error('Ocurrió un error desconocido'); // Manejo genérico para otros tipos de error
      }      }
    }
  }


const myDate = new MyDate(1996, 7, 29);
console.log(myDate.printFormat());
myDate.month = 13; // Esto lanzará un error y mostrará el mensajemyDate.month = 13; 
