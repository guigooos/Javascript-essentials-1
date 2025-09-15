//Strings para número
console.log(Number("123"));   // 123
console.log(Number("123.45"));// 123.45
console.log(Number(""));      // 0
console.log(Number("abc"));   // NaN
console.log(Number("0"));     // 0

//parseInt e parseFloat
console.log(parseInt("123.45"));   // 123 (só parte inteira)
console.log(parseFloat("123.45")); // 123.45 (aceita decimais)
//parseInt corta na parte inteira, parseFloat mantém os decimais