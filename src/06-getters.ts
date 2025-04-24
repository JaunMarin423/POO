export class MyDate {
  constructor(
    public year: number, 
    public month: number,
    private _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
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
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  /**
   * Getter `day`
   * Este getter permite acceder al valor privado `_day` de la clase.
   * Si el día es 29, imprime un mensaje en la consola indicando que el día es 29.
   * 
   * Curiosidad:
   * - Este getter no solo devuelve el valor del día, sino que también realiza una acción adicional (imprimir un mensaje).
   * - Es un ejemplo de cómo los getters pueden incluir lógica personalizada.
   * 
   * @returns {null | void} Retorna `null` si el día no es 29, o imprime un mensaje si lo es.
   */
  get day() {
    if (this._day == 29) {
      return console.log('El día es 29');
    }
    return null;
  }

  /**
   * Getter `isLeapYear`
   * Este getter determina si el año actual es un año bisiesto.
   * 
   * Reglas para determinar un año bisiesto:
   * - Un año es bisiesto si es divisible entre 4.
   * - Sin embargo, si el año es divisible entre 100, no es bisiesto, a menos que también sea divisible entre 400.
   * 
   * Curiosidad:
   * - Los años bisiestos tienen 366 días en lugar de 365, con un día adicional en febrero (29 de febrero).
   * - Este cálculo es importante para mantener el calendario sincronizado con el año solar.
   * 
   * @returns {boolean} `true` si el año es bisiesto, `false` en caso contrario.
   */
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true; 
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1996, 7, 29);
console.log(myDate.printFormat());
myDate.day;
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log(myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log(myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log(myDate4.isLeapYear);