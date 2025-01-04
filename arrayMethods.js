const arr = [1,2,3,4,5,6];

// Array.map Function
const myMap = (funct) =>{
    const res = [];
    // Traverse the all array by calleing the callback function, then push the result to a new array
    for(let i = 0; i < arr.length;i++){
        const temp = funct(arr[i]);
        res.push(temp);
    }
    return res;
}

const myFilter = (funct) =>{
    const res = [];

    for(let i = 0; i < arr.length;i++){
        const temp = funct(arr[i]);
        if (temp === true)
        res.push(arr[i]);
    }

    return res;
} 


console.log( "myMap",myMap((a) => a+4));
console.log("myFilter", myFilter((a) => a%2===1));





