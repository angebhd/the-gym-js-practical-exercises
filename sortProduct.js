let sortProduct = (arr)=>arr.sort((a,b)=> a.price - b.price)

let products = [{name: "cookies", price: 200},
                {name: "sweeties", price:250},
                {name: "fries", price:400},
                {name: "juice", price:600},
                {name: "sambusa", price: 150}
            ];

console.log(sortProduct(products));