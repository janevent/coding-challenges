var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0);
    let dummy = head;
    
    l1dummy= l1;
    l2dummy = l2;
    
    
    while(l1dummy !== null && l2dummy !== null){
        
        if(l1dummy.val < l2dummy.val){
            dummy.next = l1dummy
            
            l1dummy = l1dummy.next
        }else{
            dummy.next = l2dummy
            
            l2dummy = l2dummy.next
        }
        dummy = dummy.next
    }
    if(l1dummy !== null){
        dummy.next = l1dummy
    }else if(l2dummy !== null){
        dummy.next = l2dummy
    }
    
    return head.next
};