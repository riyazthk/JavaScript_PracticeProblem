let employee='{"name":"riyaz"}'
try{
    let data=JSON.parse(employee)
    if(!data.lastName){
        throw new  SyntaxError("there is no such type of field in json")
    }
}catch(err){
    console.log(err.message)
    // console.log("failure")
}