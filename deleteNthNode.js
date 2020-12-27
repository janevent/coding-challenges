/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let count = 1
    let dummy = new ListNode(0);
    dummy.next = head
    if(n === 1 && dummy.next.next === null){
        
        return dummy.next.next
    }
    
    let currentNode = head
    
    while(currentNode.next !== null){
        let next = currentNode.next;
        currentNode = next;
        count++
        console.log("in while", currentNode, count)
    }
    console.log("c", currentNode, "count", count)
    
    let c = count - n
    console.log("newc", c)
    
    currentNode = dummy;
    
    while(c > 0){
        c--
        
        //     nu = nextnoif(i === (c-1)){de
        // }
        console.log("currentnode in loop", currentNode)
        if(currentNode !== null){
            let copy = currentNode.next;
            currentNode = copy;    
        }
    }
    if(currentNode !== null){
        currentNode.next = currentNode.next.next
    }
    return dummy.next;
};