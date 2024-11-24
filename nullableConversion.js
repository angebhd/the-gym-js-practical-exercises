function convertNullableValues(obj){
    for (let i in obj){
        if (obj[i] === null) obj[i] = 0;
        if (obj[i] === undefined) obj[i] = "";
    }
}
const myObj = {name : undefined, age: null, sex: 'M'}
console.log(myObj);
convertNullableValues(myObj);
console.log(myObj);