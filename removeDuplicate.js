class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
}

LinkedList.prototype.insertAtBeginning = function(data){
    let node = new Node(data)
    node.next = this.head;
    this.head = node;
    return this.head
}

LinkedList.prototype.displayEachNode = function(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next
    }
    return this.head
}

let newList = new LinkedList();
newList.insertAtBeginning(5)
newList.insertAtBeginning(6)
newList.insertAtBeginning(7)
newList.insertAtBeginning(8)
newList.insertAtBeginning(6)
newList.insertAtBeginning(10)
//console.log(newList)
//console.log(newList.displayEachNode())

function removeDuplicate(list){
    //console.log('console list', list)
    if(!list.head||!list.head.next) return list;

    let head = list.head
    
    while(head){
        currentNode = head
        while(currentNode && currentNode.next){
            if(head.data === currentNode.next.data){
                currentNode.next = currentNode.next.next
            }
            currentNode = currentNode.next
        }
        head = head.next
    }
    return list.head
}
newList.displayEachNode();
//console.log(removeDuplicate(newList));
removeDuplicate(newList)
console.log('removed')
newList.displayEachNode();