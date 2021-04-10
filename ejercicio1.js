    let aprendiz={
        nombre:"Enmanuel",edad:18,estatura:1.77,planeta:"tierra"
    };

   function data(padawan,msg){
     
    if(padawan.edad<15){
        let msg1= "menor de 15 "
        let msg2="puede realizar la actividad de Manejo de la fuerza"
        msg(msg1,msg2);
    }else{
        let msg1="mayor de 15"
        let msg2=" puede realizar la actividad de Manejo de sable de luz"
        msg(msg1,msg2);
    }
  }

   data(aprendiz, function(msg1,msg2){
       console.log("el padawan " + aprendiz.nombre+ " proveniente del planeta "+ aprendiz.planeta+ " tiene " +aprendiz.edad + ", al ser " + msg1  + msg2);
   });

  /* 1.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus 
aprendices Padawans 2 actividades dependiendo de la edad de 
ellos:
 Manejo de la fuerza: Si el aprendiz es menor de 15 años
 Manejo del sable de luz: Si el aprendiz es mayor de 15 
años
Inicialmente, se debe programar una función que asocie los 
datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un 
objeto y una vez este objeto sea creado se debe llamar a una 
función secundaria que clasifique y muestre en consola la 
actividad asignada al Padawa*/
 
