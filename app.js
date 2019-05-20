function contar (texto, caracter){
  var cont = 0;
  for(var i=0; i<texto.length; i++){
  if (texto[i] == caracter){
    cont = cont + 1;
    }
  }
  return (cont);
}
var resultado = contar("mañana", "a");
console.log(resultado);