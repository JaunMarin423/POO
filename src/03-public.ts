export class MyDate {
    public year: number; // Propiedad pública, puede ser modificada desde cualquier lugar
    public month: number;
    readonly day: number; // Propiedad de solo lectura, no puede ser modificada después de la inicialización readonly

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day; // La propiedad readonly se asigna aquí
    }
}

// Ejemplo de uso
const myDate = new MyDate(1996, 6, 29);
console.log(myDate.day); // Salida: 29
// myDate.day = 12; // Error: Cannot assign to 'day' because it is a read-only property
