/**
 * Clase MyDate: Representa una fecha personalizada con atributos y métodos para manipularla.
 */
export class MyDate {
    // Atributos de la clase MyDate
    year: number; // Año de la fecha
    month: number; // Mes de la fecha (1-12)
    day: number; // Día de la fecha (1-31)

    /**
     * Constructor: Método especial que se ejecuta al crear una instancia de la clase.
     * Sirve para inicializar los valores de los atributos.
     * @param year Año de la fecha
     * @param month Mes de la fecha
     * @param day Día de la fecha
     */
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    /**
     * Método printFormat
     * Un método es una función que pertenece a una clase y define un comportamiento o acción que los objetos de esa clase pueden realizar.
     * Este método devuelve la fecha en formato "día/mes/año".
     * @returns {string} Fecha formateada como cadena.
     */
    printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`;
    }

    /**
     * Método add
     * Este método permite modificar la fecha sumando una cantidad específica de días, meses o años.
     * @param amount Cantidad a sumar
     * @param type Tipo de unidad a modificar ('days', 'months', 'years')
     * 
     * Curiosidad:
     * - Este método utiliza un parámetro de tipo literal ('days' | 'months' | 'years') para limitar las opciones válidas.
     * - Esto ayuda a evitar errores al pasar valores no permitidos.
     */
    add(amount: number, type: 'days' | 'months' | 'years') {
        // Crear una instancia de Date con los valores actuales
        const date = new Date(this.year, this.month - 1, this.day);

        // Modificar la fecha según el tipo
        if (type === 'days') {
            date.setDate(date.getDate() + amount); // Sumar días
        } else if (type === 'months') {
            date.setMonth(date.getMonth() + amount); // Sumar meses
        } else if (type === 'years') {
            date.setFullYear(date.getFullYear() + amount); // Sumar años
        }

        // Actualizar los atributos de la clase con los valores ajustados
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1; // Ajustar el índice del mes (0-indexado)
        this.day = date.getDate();
    }

    /**
     * Método isValidDate
     * Valida si la fecha actual (año, mes, día) es válida.
     * @returns {boolean} `true` si la fecha es válida, `false` en caso contrario.
     */
    isValidDate(): boolean {
        // Crear una instancia de Date con los valores actuales
        const date = new Date(this.year, this.month - 1, this.day);

        // Verificar que los valores coincidan con los atributos originales
        return (
            date.getFullYear() === this.year &&
            date.getMonth() === this.month - 1 &&
            date.getDate() === this.day
        );
    }
}

// Creación de una instancia de la clase MyDate
const myDate = new MyDate(1996, 6, 29); // Fecha inicial: 27 de junio de 1996

// Uso del método printFormat para mostrar la fecha formateada
console.log(myDate.printFormat()); // Salida: "27/6/1996"

// Uso del método add para sumar días a la fecha
myDate.add(4, 'days'); // Suma 4 días a la fecha
console.log(myDate.printFormat()); // Salida: "3/7/1996"

