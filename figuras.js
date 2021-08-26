//Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm")

function perimetroCuadrado(lado){
    return lado * 4;
}

//perimetroCuadrado(lado)
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm")

function areaCuadrado(lado){
    return lado * lado
}


// console.log("El área del cuadrado es: " + areaCuadrado + " cm2")

console.groupEnd();
//Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + " cm, " 
//     + ladoTriangulo2 
//     + " cm y "
//     + baseTriangulo 
//     + " cm." 
// )

//console.log("La altura del Triángulo es: " + alturaTriangulo + " cm")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


//console.log("El perímetro del Triángulo es: " + perimetroTriangulo + " cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El área del Triángulo es: " + areaTriangulo + " cm")

console.groupEnd();

//Código del circulo
console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// 

// console.log(
//     "El radio del círculo es: " 
//     + radioCirculo 
//     + " cm y el diámetro es : "
//     + diametroCirculo
//     + " cm y PI es : "
//     + PI
// )

// const perimetroCirculo = diametroCirculo * PI;
const PI = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio,PI){
    return (radioCirculo * radioCirculo) * PI;
}

//console.log("El perimetro del círculo es: " + perimetroCirculo + " cm")

//console.log("El área del círculo es: " + areaCirculo + " cm2")

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}