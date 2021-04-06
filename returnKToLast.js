
function kthToLast(head, k){
    if(!head || !head.next) return head;
    let dummyNode = head;
    let nodes = 0;
    while(dummyNode){
        nodes++
        dummyNode = dummyNode.next
    }
    let index = nodes - k;
    let dummy2 = new Node();
    dummy2.next = head;
    for(let i = 0; i < index; i++){
        dummy2 = dummy2.next
    }
    return dummy2.next
}