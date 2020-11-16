/** Ejercicio 1 */
function devuelveArray(){
    var x=[];
    for(var i=1; i<=255; i++){
      x.push(i);
    }
    return x;
    }
    console.log(devuelveArray());

/** Ejercicio  2*/
    function sumaPares(){
        var suma=0;
        for(var i=0; i<=1000; i+=2){
        suma=suma+i;
        }
        return suma;
        }
     console.log(sumaPares());

/** Ejercicio 3 */
 function sumaImpares(){
     let suma=0;
    for(var i=1;i<=5000; i+=2){
      suma=suma+i;
    }
    return suma;
 }
 console.log(sumaImpares());

 /** Ejercicio 4 */
 function sumaArray(x){
    let suma=0;
    for(var i=0; i<x.length; i++){
      suma=suma+x[i];
    }
    return suma;
  }
  console.log(sumaArray([1,2,5]));

/**Ejercicio 5*/
function maximo(x){
    let max=x[0];
    for(var i=0;i<x.length; i++){
      if(x[i]>max){
        max=x[i]
      }
    }
    return max;
  }
  console.log(maximo([-3,3,5,7]));

  /**Ejercicio 6 */
function promedio(x){
    let suma=0;
    for(var i=0;i<x.length; i++){
      suma=suma+x[i];
    }
    return suma/x.length;
  }
  console.log(promedio([1,3,5,7,20]));

  /**Ejercicio 7 */
function arrayImpares(){
    let x=[];
    for(var i=1; i<=50; i+=2){
      x.push(i);
    }
    return x;
  }
  console.log(arrayImpares());

  /**Ejercicio 8 */
function mayorQueY(x,y){
    var cont=0;
    let array=[];
    for(var i=0; i<x.length; i++){
      if(x[i]>y){
      cont++;
      array.push(x[i]);
      }
    }
    console.log("El arreglo tiene "+cont+" valores mayores que "+y);
    return cont, array;
  }
  console.log(mayorQueY([1,3,5,7],3));

  /**Ejercicio 9 */
function cuadrado(x){
    let array=[];
    for(var i=0; i<x.length;i++){
      array.push(x[i]*x[i]);
    }
    return array;
  }
  console.log(cuadrado([1,5,10,-2]));

  /**Ejercicio 10 */
function borraNegativo(x){
    for(var i=0; i<x.length; i++){
      if(x[i]<0){x[i]=0;}
    }
    return x;
  }
  console.log(borraNegativo([1,5,10,-2]));

  /**Ejercicio 11 */
function maxMinAver(x){
    let max=x[0];
    let min=x[0];
    let sum=0;
  
    for(var i=0; i<x.length; i++){
      if(x[i]>max){max=x[i];}
      if(x[i]<min){min=x[i];}
      sum=sum+x[i];
    }
    let array=[max,min,sum/x.length];
    return array;
  }
  console.log(maxMinAver([1,5,10,-2]));

/**Ejercicio 12 */
function cambiaValores(x){
  
    if(x.length<2)
    {console.log("extensión mínima del arreglo debe ser 2");
    }else{
      
      let prim=x[0];
      var ultim=x[x.length-1];
  
      x[0]=ultim;
      x[x.length-1]=prim;
    }
    return x;
  }
  console.log(cambiaValores([1,5,10,-2]));

  /**Ejercicio 13 */
function reemNeg(x){
    for(var i=0; i<x.length; i++){
      if(x[i]<0){x[i]="Dojo";}
    }
    return x;
  }
  console.log(reemNeg([-1,-3,2]));