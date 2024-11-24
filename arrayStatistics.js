function arrStats(arr){
    if (arr.length < 1) return null;
    let max = arr[0];let min = arr[0];
    let sum = 0
    arr.forEach(element => {
        sum += element;
        max = max > element ? max : element;min = min < element ? min : element;
    });
    return {sum: sum, average: sum/arr.length, max: max, min: min}
}
console.log(arrStats([10, 2, -10, 4, 5, 6]))