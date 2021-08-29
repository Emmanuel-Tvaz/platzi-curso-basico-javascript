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
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);