class Estudiante {
    #nombre;
    #asignaturas;
    constructor(nombre) {
        this.#nombre = nombre;
        this.#asignaturas = ['Javascript', 'HTML', 'CSS'];
    }
    obtenDatos(){
        return `Mi nombre es ${this.#nombre} y estoy cursando ${this.#asignaturas[0]}, ${this.#asignaturas[1]} y ${this.#asignaturas[2]}`;
    }
}

// Vamos a crear una instancia de Estudiante
const nuevo_estudiante = new Estudiante("Jordi");

console.log(nuevo_estudiante.obtenDatos());
