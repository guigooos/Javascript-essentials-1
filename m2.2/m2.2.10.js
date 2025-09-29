var times = ["Corinthians", "Palmeiras", "São Paulo"];

// 1. Adicione "Corinthians" no final
times.push("Corinthians");

// 2. Adicione "Grêmio" no início
times.unshift("Grêmio");

// 3. Remova o último time
times.pop();

// 4. Encontre a posição do "Palmeiras"
let posPalmeiras = times.indexOf("Palmeiras");

// 5. Inverta a ordem dos times
times.reverse();

console.log("Times atualizados:", times);
console.log("Posição do Palmeiras antes do reverse:", posPalmeiras);
// -> Times atualizados: [ 'São Paulo', 'Palmeiras', 'Corinthians', 'Grêmio' ]
//Posição do Palmeiras antes do reverse: 2
