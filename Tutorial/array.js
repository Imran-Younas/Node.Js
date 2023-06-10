var arr = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1];
console.log(arr);


// filter function


var result = arr.filter((item) => {
    return item == 1  || item == 2;
})


console.log(result)