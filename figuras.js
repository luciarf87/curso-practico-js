//Código del cuadrado

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");
// console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");

console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();


//Código del triángulo

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")
// const alturaTriangulo = 5.5;
// console.log("La atura del triángulo es de: " + alturaTriangulo + "cm");
// const perimetroriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: "+ perimetroriangulo + "cm");
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");


console.group("Triángulos");
function perimetroTriangulo (lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
function areaTriangulo (base, altura) {
    return (base * altura) /2;
}
console.groupEnd();

//Código del círculo

// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + "cm");
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");
// const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: "+ perimetroCirculo + "cm");
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El área del círculo es: "+ areaCirculo + "cm^2");

console.group("Círculos");
const PI = Math.PI;
function diametroCirculo (radio) {   
    return radio * 2;
} 
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo (radio) {
    return radio * radio * PI;
}
console.groupEnd();



//Interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const value1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputLado2");
    const value2 = inputLado2.value;
    const inputBase = document.getElementById("InputBase");
    const value3 = inputBase.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    
    const inputBase = document.getElementById("InputBase");
    const base = inputBase.value;
    const inputAltura = document.getElementById("InputAltura");
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}