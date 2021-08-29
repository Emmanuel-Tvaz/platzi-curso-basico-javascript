
function calcularMediaAritmetica(lista){

    // let sumaLista = 0;

    // for(let i=0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    
    //Reduce
    //El método reduce () ejecuta una función reductora para cada valor de una matriz.
    // reduce () devuelve un valor único que es el resultado acumulado de la función.
    // reduce () no ejecuta la función para elementos de matriz vacíos.
    //  reduce () no cambia la matriz original.


    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}
