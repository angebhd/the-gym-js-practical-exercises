let sortProduct = (arr)=>arr.sort((a,b)=> a.price - b.price)

let products = [{name: "cookies", price: 200},
                {name: "sweeties", price:250},
                {name: "fries", price:400},
                {name: "juice", price:600},
                {name: "sambusa", price: 150}
            ];

console.log(sortProduct(products));
/* 
Conpare function
    Ascending order
        - a < b : return -1 [Negative value]
        - a > b : return 1 [positive value]
        + return a - b
    
    Descending order
        - a > b : return -1 [Negative value]
        - a < b : return 1 [positive value]
        + return b - a
*/