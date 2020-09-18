let jsonObject="{ name riyaz}"
    

try{
    let result=JSON.parse(jsonObject)
    console.log(result)
}catch(err){
    console.log(err.name)
    console.log(err.message)
}
finally{
    console.log("always excute")
}

try{
    let number=10
    console.log(number)
}
finally{
    console.log("always execute")
}