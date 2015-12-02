while (true) {
var x = +prompt('Введите число "x", которое будем возводить в степень');
if ( (x != null) && (x != '') && (isNaN(x) != true) )  {
    break;
}
    alert ('Введите правильное знначение ! (число)');
}

while (true) {
var n = +prompt('Введите степень "n" , в которую будем возводить число');
if ( (n != null) && (n != '') && (isNaN(n) != true) )  {
    break;
}
    alert ('Введите правильное знначение ! (число)');
}



 function pow(base, exponent) {
   var result=1;
   var exponentModule = Math.abs(exponent);
   for (var i = 0; i < exponentModule; i++) {
    result = result * base;
   }
	if (exponent >= 0) {
    return result;
  } else  {
    result = 1 / result;
    return result;
  }
 }
 var powResult = pow(x, n);
 alert('x^n = '+powResult);
 console.log('x^n = ',powResult);



