//const lista1 =[6,7,5,7,8,6];

function consultarPromedioPond(lista1){
    let calificacionPonderada = 0;
    let valorPonderaciones = 0;
    
    for(let i=0; i < lista1.length; i++){
        const ponderacion = 0;
        let value = 0;
         if( i == lista1.length -1){
             value = 5;
         }else{
            value = 1;
         }
         valorPonderaciones += value;
         calificacionPonderada += lista1[i] * value;
    
     }

    const promedioPond = calificacionPonderada / valorPonderaciones;
    return promedioPond;
}



