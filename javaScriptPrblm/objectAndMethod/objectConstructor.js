function Person(first,last,age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
}
var father=new Person("riyaz","ahamed",22)
console.log(father.firstName + " "+father.lastName+" "+father.age) 
