class Node{
    constructor(val){
        this.value=val
        this.left=null
        this.right=null
    }
}

class BSTree{
    constructor(){
        this.root=null
    }
    
    insertNode(val){
        let newNode= new Node(val)
        if(this.root===null){
            this.root=newNode
        }else{
            this.recInsert(this.root,newNode)
        }
    }
    
    recInsert(root,node){
        if(root.value<node.value){
            if(root.right==null){
                root.right=node
            }else{
                this.recInsert(root.right,node)
            }
        } else {
            if(root.left==null){
                root.left=node
            }else{
                this.recInsert(root.left,node)
            }
        }
    }
    
    searchNode(root,value){
        if(root===null){
            return false
        }else if(root.value===value){
            return true
        }else if(root.value>value){
            return this.searchNode(root.left,value)
        }else{
            return this.searchNode(root.right,value)
        }
    }

    BFSTraversing(){
        let queue=[];
        queue.push(this.root)
        
        while(queue.length){
            let current=queue.shift()
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            console.log("queue",current.value)
        }
    }
    
    minValue(root){
        if(!root.left){
            return root.value
        }else{
            return this.minValue(root.left)
        }
    }
    
    maxValue(root){
        if(!root.right){
            return root.value
        }else{
            return this.maxValue(root.right)
        }
    }
    
}

let obj = new BSTree()
obj.insertNode(5)
obj.insertNode(2)
obj.insertNode(12)
obj.insertNode(6)
let rs=obj.searchNode(obj.root,6)
obj.BFSTraversing()
let min=obj.minValue(obj.root)
let max=obj.maxValue(obj.root)
console.log("Try programiz.pro",obj,"\n",min,max);