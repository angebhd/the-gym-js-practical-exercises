const arr = [1,2,3,4,5,6];

// Array.map Function
const myMap = (funct) =>{
    const res = [];

    for(let i = 0; i < arr.length;i++){
        const temp = funct(arr[i]);
        res.push(temp);
    }

    return res;
}

console.log(myMap((a) => a+4));





