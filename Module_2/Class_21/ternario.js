const caraOuCoroa = () => Math.floor(Math.random() * 100) <= 50 ? "cara" : "coroa";

console.log(caraOuCoroa(25));
console.log(caraOuCoroa(75));
console.log(caraOuCoroa(2000));