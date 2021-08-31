//Helpers

function isPar(numerito){
    return numerito%2 == 0;
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

//Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt (lista.length / 2);

    if(isPar(lista.length)){
        const personitaMitad = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad,personitaMitad2]);
        return mediana;

    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);


const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

//Mediana del top 10%
const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length  - spliceStar;

const salariosColTop10 = salariosColSorted.splice(
    spliceStar,spliceCount
    );



const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
)