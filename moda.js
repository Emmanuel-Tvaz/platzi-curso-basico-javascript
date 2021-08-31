const lista1= 
[
 1,
 2,
 3,
 4,
 4,
 2,
 3,
 4,
 5,
 1,
 1,
 2,
 3,
 1,
 2,
 3,
 3,
 3,
 3,   
];



function calcularModa (listaPost){
    const listaPostCount = {};

    listaPost.map(
        function(elemento){
            if(listaPostCount[elemento]){
                listaPostCount[elemento] += 1;
            }else{
                listaPostCount[elemento] = 1;
            }
        }
    );

    const listaPostArray = Object.entries(listaPostCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1] 
        }
    )

    const moda = listaPostArray[listaPostArray.length - 1];

    return moda;
}

