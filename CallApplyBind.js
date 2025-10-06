// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let obj1={
    name:"Nishant",
    last:"Rajput",
    fullName (city,country){
        return this.name+" "+this.last+" "+city+" "+country+"\n"
    }
}

let obj2={
    name:"rahul",
    last:"Gupta"
}

let obj3={
    name:"dipu",
    last:"Gupta"
}

let rs1=obj1.fullName.call(obj2,"delhi","india")
let rs2=obj1.fullName.apply(obj3,["delhi","india"])
let rs=obj1.fullName.bind(obj2,"delhi","india")
console.log("Try programiz.pro",rs(),rs1,rs2);

// call, apply and bind is used for manually control ,this keyword refers to inside a function.

// bind Does not call the function immediately. Instead, it returns a new function with this permanently set to the provided value.