let sum=0
function value(...arg){
    for(let ar of arg){
        sum+=ar
    }
    return sum
}
console.log(value(1))
console.log(value(1,4))
console.log(value(1,2,7))