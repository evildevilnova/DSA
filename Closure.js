const counter=(function(){
    let count=0
    return function(){
        return ++count
    }
    })()
    counter()
console.log("Try programiz.pro",counter());