function passarPraFuncao() { 

let arrayPraFuncao = [50,320,15,20,100,90];
 
calculateAverage.apply(null, arrayPraFuncao);
  
}

function calculateAverage(a,b,c,d,e,f){

  console.log(`O array é esse -> ${a}  ${b}, ${c}, ${d}, ${e}, ${f}`);
  console.log(Math.round((a + b + c + d + e + f) /6))
  
}

passarPraFuncao();