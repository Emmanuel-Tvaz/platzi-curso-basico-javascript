// const lista1 = [
//     200,
//     500,
//     40000000,
//     100,
// ];

function ordenarLista(){

}

function calcularMediana(listaPost){
    const mitadListaPost = parseInt(listaPost.length / 2);

    //De forma predeterminada, la función sort () ordena los valores como cadenas.
    //Esto funciona bien para cadenas ("Apple" viene antes que "Banana").
    //Sin embargo, si los números se ordenan como cadenas, "25" es mayor que "100", porque "2" es mayor que "1".
    //Debido a esto, el método sort () producirá un resultado incorrecto al ordenar números.
    //Puede solucionar esto proporcionando una función de comparación: 
    const listaOrdenada = listaPost.sort(function(a,b){return a - b});
    
    function esPar(numero){
        if(numero % 2  === 0){
            return true;
        }else{
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadListaPost - 1];
        const elemento2 = listaOrdenada[mitadListaPost];
    
        const promedio1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    
        mediana = promedio1y2;
    }else{
        mediana = listaOrdenada[mitadListaPost];
    }
    return mediana;
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