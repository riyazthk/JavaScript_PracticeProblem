// const { rejects } = require("assert");
// const { resolve } = require("path");

// async function substract(num1,num2){
//     let sub=num1-num2;
//     if(sub){
//    return num1-num2;
// }else{
//     throw Error("invalid data")
// }
// }
// const promiseObject=substract(8,2);

// promiseObject.then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })

//asyn using await
async function student(){
let promise=new Promise((resolve,rejects)=>{
setTimeout(()=>resolve("done"),1000)
})
let result=await promise;
console.log(result)
console.log("sucess")
}
student();