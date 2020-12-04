/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    console.log("NODE", node);
   // console.log("todelete", node.first)
    let pointer = node.next;
    let v = node.val;
    console.log("pointer", pointer)
    console.log("value", v)
    node.val = node.next.val;
    node.next = node.next.next
    
};