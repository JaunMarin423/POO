export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  /**
   * Método privado addPadding
   * Este método agrega un "0" al inicio de un número si es menor a 10.
   * Es útil para formatear valores como días o meses en formato de dos dígitos.
   * 
   * Ejemplo:
   * - Entrada: 7 -> Salida: "07"
   * - Entrada: 12 -> Salida: "12"
   * 
   * @param value Número a formatear
   * @returns {string} Número formateado como cadena
   */
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1996, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay());