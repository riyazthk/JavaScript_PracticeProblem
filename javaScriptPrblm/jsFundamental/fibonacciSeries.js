function fibonacci(num) 
{ 
    var frstNum=0; 
    var secNum=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++)  
    { 
        sum=frstNum+secNum; 
        frstNum=secNum; 
        secNum=sum; 
    } 
    return secNum; 
} 
  
console.log(fibonacci(8)); 
