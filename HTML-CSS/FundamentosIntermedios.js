/** Ejercicio 1 */
function sigma(x){
    let sum=0;
    for(var i=1; i<=x; i++){
      sum=sum+i;
    }
    return sum;
  }
  console.log(sigma(3));
  console.log(sigma(4));
  console.log(sigma(5));

  /** Ejercicio 2 */
function factorial(x){
    let mult=1;
    for(var i=1; i<=x; i++){
      mult=mult*i;
    }
    return mult;
  }
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5));

  /** Ejercicio 3 */

function fibonacci(x){
    if(x==1||x==0){
      return x;
      }else{
        return fibonacci(x-1)+fibonacci(x-2);
      }
  }
  
  console.log(fibonacci(0));
  console.log(fibonacci(1));
  console.log(fibonacci(2));
  console.log(fibonacci(4));
  console.log(fibonacci(7));

  /** Ejercicio 4 */
function penultimo(x){
    if(x.length<2){return null;}else{
          return x[x.length-2]; 
    }
  }
  console.log(penultimo([42,true,4,"Liam", 7]));

  /** Ejercicio 5 */
function devuelveN(x,n){
    if(x.length<n){return null}
    else{
      return x[x.length-n];
    }
  }
  console.log(devuelveN([5,2,3,6,4,9,7],3))

  /** Ejercicio 6 */

function segundoMayor(x){
    var mayor=x[0];
    var indice=0;
    for(var i=0; i<x.length; i++){
      if(x[i]>mayor){
        indice=i;
        }
        
    }
    
    x.splice(indice,1);
    console.log(x);
    for(var j=0;j<x.length;j++){
    if(x[i]>mayor){
      mayor=x[i];
    }
    }
    return mayor;
    }
    console.log(segundoMayor([42,1,4,3.14,7]))

/** Ejercicio 7 */
function duplicaPares(x){
    var array=[];
    for(var i=0; i<x.length; i++){
      if(i%2==0){
        array.push(x[i]);
        array.push(x[i]);
      }else{
        array.push(x[i]);
      }
    }
    return array;
  }
  console.log(duplicaPares([4, "Ulysses", 42, false]))
