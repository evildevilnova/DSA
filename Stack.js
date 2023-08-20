
class Stack{
    constructor(){
        this.item=[];
    }
    
    // add element
    add(el){
        return this.item.push(el);
    }
    
    // remove element 
    remove(){
        if(this.item.length>0){
            return this.item.pop();
        }
    }
    
    isEmpty(){
        return this.item.length==0     
    }
    
    // view last element 
    peek(){
        return this.item[this.item.length-1]
    }
    
    size(){
        return this.item.length
    }
    
    clear(){
        this.item=[]
    }
}

let stack= new Stack();
let add = stack.add(5)
let add1 = stack.add(9)
let size= stack.size()
let isEmpty= stack.isEmpty()
let lastEl= stack.peek();
let remove= stack.remove()
    stack.clear();

console.log("Welcome to Programiz!",add,add1,size,lastEl,isEmpty,remove);



// stack without using array

class Node{
    constructor(val){
        this.value=val;
        this.next=null
    }
}

class Stack{
    constructor(){
        this.size=0;
        this.first=null;
        // this.last=null;
    }
    
    push(val){
        let node = new Node(val)
        if(!this.first){
            this.first=node;
            // this.last=node;
        }else{
            let temp=this.first;
            this.first=node;
            this.first.next=temp;
        }
        return ++this.size;
    }
    
    pop(){
        if(!this.first) return null;
        // if(this.first === this.last){
        //     this.last=null;
        // }
        let temp=this.first;
        this.first=this.first.next;
        --this.size;
        return temp.value
    }
}

let stack1= new Stack();
stack1.push(5)
stack1.push(6)
stack1.push(7)
console.log("Welcome to Programiz!",stack1.pop());