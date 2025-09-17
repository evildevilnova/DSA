function PromiseCall(success){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve(true);
            }else{
                reject(false)
            }
        },2000)
    })
}

async function apiCall(){
    try{
        console.log("apiCall")
        let rs= await PromiseCall(true)
        console.log(rs)
    }catch(e){
        console.log(e)
    }
}

apiCall()
console.log("Try programiz.pro");