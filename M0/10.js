let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
console.log(z); // o resultado é 22,5. isso acontece pq o codigo prioriza as operações em parenteses