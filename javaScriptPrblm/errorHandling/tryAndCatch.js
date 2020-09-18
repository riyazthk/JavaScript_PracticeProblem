let json="{ name riyaz}"
    

try{
    let result=JSON.parse(json)
    console.log(result)
}catch(err){
    console.log(err.name)
    console.log(err.message)
}