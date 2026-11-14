/*
//Ejemplo-01 Declaración de Variables y Tipos de Datos
{
    let nombre = "Juan";
    let edad = 20;
    let estatura = 1.75;
    let activo = true;

    console.log(nombre);
    console.log(edad);
}
//Ejercicio-01 Declaración de Variables y Tipos de Datos
{
    let nombre = "Ana";
    let edad = 25;
    let carrera = "Ingeniería de Sistemas";
    let promedio = 85;

    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Carrera: " + carrera);
    console.log("Promedio: " + promedio);
}

//Ejemplo-02 Entrada de Datos
{
    let nombre = prompt("Ingrese su nombre"); 
    console.log("Bienvenido " + nombre);

}
 
//Ejercicio-02 Entrada de Datos
{
    let nombre = prompt("Ingrese su nombre");
    let ciudad = prompt("Ingrese su ciudad");
    let edad = prompt("Ingrese su edad");

    console.log("Nombre: " + nombre);
    console.log("Ciudad: " + ciudad);
    console.log("Edad: " + edad);
}
//Ejemplo-03 Operadores Relacionales
{
    let edad = Number(prompt("Ingrese edad")); 
    if(edad >= 18){ 
    console.log("Mayor de edad"); 
    } 
}
//Ejercicio-03 Operadores Relacionales
{
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));

    if (num1 === num2) {
    console.log("Son iguales");
    }
    if (num1 > num2) {
    console.log("El primero es mayor");
    }
    if (num2 > num1) {
    console.log("El segundo es mayor");
    }
}
//Ejemplo-04 if-else
{
    let nota = Number(prompt("Ingrese nota")); 
    if(nota >= 51){ 
    console.log("Aprobado"); 
    }else{ 
    console.log("Reprobado"); 
    } 
}
//Ejercicio-04 if-else
{
    let edad = Number(prompt("Ingrese su edad"));
    if (edad >= 18) {
        console.log("Eres mayor de edad");

    }else{
        console.log("Eres menor de edad"); 
    }
}
// Ejemplo-05 if-Else-if
 
{
    let nota = Number(prompt("Ingrese nota")); 
    if(nota >= 90){ 
    console.log("Excelente"); 
    } 
    else if(nota >= 70){ 
    console.log("Bueno"); 
    } 
    else if(nota >= 51){ 
    console.log("Regular"); 
    } 
    else{ 
    console.log("Reprobado"); 
    } 
}
// Ejercicio-05 if-Else-if

{
    let nota = Number(prompt("Ingrese la nota"));

    if (nota >= 90) {
    console.log("Excelente");
    } else if (nota >= 70) {
    console.log("Bueno");
    } else if (nota >= 51) {
    console.log("Regular");
    } else {
    console.log("Reprobado");
    }
}
    
// Ejemplo-06 switch-case
{
    let opcion = Number(prompt("Ingrese opcion"));
    switch (opcion) {
        case 1:
            console.log("Registrar");
            break;
        case 2:
            console.log("Modificar");
            break;
        default:
            console.log("Opcion no valida");
    }
}
    */
// Ejercicio-06 switch-case
{
    let opcion = Number(prompt("Ingrse una opcion para seleccionar el mes"));
    switch (opcion) {
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Feberero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        default:
            console.log("Opcion no valida");
    }
}
// Ejemplo-07 ciclo for
for(let i=1; i<=5; i++){ 
console.log(i); 
}
