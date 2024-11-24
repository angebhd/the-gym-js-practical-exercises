// const solution = (arr) => arr.map( a => {if (a%2 === 1){ return a**2;}}).filter( a => {if (a !== undefined)return a});
const solution = (arr) => arr.filter( a => {if (a%2 === 1)return a*2}).map( a => a**2);
console.log(solution([10, 15, 20, 25, 30]));