//Código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado
}

//Código del triángulo
function calculaAltura(lado1, lado2, base){
    ladoReal = 0;
    baseReal = 0;
    if(lado1==lado2){
        ladoReal = lado1
        baseReal = base;
    }else if(lado1==base){
        ladoReal = lado1
        baseReal = lado2;
    }else if(lado2==base){
        ladoReal = lado2;
        baseReal = lado1;
    }
    baseReal = baseReal / 2;
    altura = (ladoReal * ladoReal) - (baseReal * baseReal)
    altura = Math.sqrt(altura)
    alert("Altura es igual a: " + altura)



    return altura;
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

//Código del circulo

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//Aquí interactuamos con el HTML

//Cuadrado HTML
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

//Triangulo HTML

function calcularPerimetroTriangulo(){
    const inputL1 = parseInt(document.getElementById("InputLado1").value);
    const inputL2 = parseInt(document.getElementById("InputLado2").value);
    const inputBase = parseInt(document.getElementById("InputBase").value);

    var isoseles = false;
    if(inputL1 == inputL2 && inputL1 != inputBase || inputL1 == inputBase && inputL1 != inputL2 ){
        isoseles = true;
    }else if(inputL2 == inputL1 && inputL2 != inputBase || inputL2 == inputBase && inputL2 != inputL1 ){
        isoseles = true;
    }

    if(isoseles){
        alert("Es un triángulo isósceles.")
         const perimetro = perimetroTriangulo(inputL1,inputL2,inputBase);
        alert(perimetro);
        
    }else{
        alert("No es un triángulo isósceles.")
    }
    

   
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBase").value;
    const inputL1 = parseInt(document.getElementById("InputLado1").value);
    const inputL2 = parseInt(document.getElementById("InputLado2").value);

    altura = calculaAltura(inputL1,inputL2,inputBase);

    const area = areaTriangulo(inputBase,altura);
    alert(area);
}




//Circulo HTML

function calcularPerimetroCirculo(){
    const InputRadio = document.getElementById("InputRadio").value;

    const perimetro = perimetroCirculo(InputRadio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const InputRadio = document.getElementById("InputRadio").value;


    const area = areaCirculo(InputRadio);
    alert(area);
}