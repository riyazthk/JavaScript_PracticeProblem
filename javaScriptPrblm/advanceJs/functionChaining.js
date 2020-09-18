class FunctionChaining{
    firstMethod(){
        console.log("this is first method")
        return this
    }
    secondMethod(){
        console.log("this is second method")
        return this
    }
    thirdMethod(){
        console.log("this is third method")
    }

}
const Chain =new  FunctionChaining()

Chain.firstMethod().secondMethod().thirdMethod()