while (true) {
var x = +prompt('Введите число "x", которое будем возводить в степень');
var flag = (x != null) && (x != '') && (isNaN(x) != true);
if ( flag )  {
    break;
}else {
	alert ('Введите правильное знначение ! (число от 1 и больше)');
}
}

while (true) {
var n = +prompt('Введите степень "n" , в которую будем возводить число');
var flag2 = (n != null) && (n != '') && (isNaN(n) != true)
if ( flag2 )  {
    break;
}else {
    alert ('Введите правильное знначение ! (число не равное 0)');
}
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



