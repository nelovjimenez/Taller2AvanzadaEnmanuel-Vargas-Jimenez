let RobarPlanos=(plano)=>{
    if(plano <=10 ){

        let mensaje=" el plano" +plano+ " es verdadero, pueden despegar la nave ";
        return (mensaje);

    }else{
        let error=" el plano "+plano + " es falso, aborten despegue "
        return(error);
    }
}

console.log(RobarPlanos( 11 ));

/*2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el 
planeta yavin4 para robar uno de los planos de una de las 10 
estrellas de la muerte, como distractor el imperio ha creado 
planos falsos y se tiene el dato de que el número de serie de 
estos planos falsos comienza por encima del número 10; es decir 
todos los planos falsos tienen números de serie consecutivos 
comenzando desde el #11. SOLO si se obtiene un plano verdadero 
Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen 
consola avisando que han despegado
 */