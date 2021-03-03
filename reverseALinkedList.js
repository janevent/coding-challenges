function reverse(head) {
    if(head === null){
        return null;
    }
    if(head.next === null){
        return head;
    }
    let preNode = null;
    let nextNode = null;
    let currentNode = head;
     while(currentNode.next !== null){
         nextNode = currentNode.next;
         currentNode.next = preNode;
         preNode = currentNode;
         currentNode = nextNode
     }
     currentNode.next = preNode
     head = currentNode;
     return head
 }