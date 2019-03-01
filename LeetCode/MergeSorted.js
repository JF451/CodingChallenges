//Definition for singly-linked list.
function ListNode(val) {
      this.val = val;
      this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
var mergeTwoLists = function(l1, l2) {

    //Edge Cases

    if(l1.next === null)
    {
        return l2;
    }

    if(l2.next === null)
    {
        return l1;
    }

    if(l2.next === null && l1.next === null)
    {
        return null;
    }


    const mergedList = new ListNode();

    let curr1Node = l1;
    let curr2Node = l2;

    while(curr1Node.next != null && curr2Node.next != null)
    {
        if(curr1Node.val <= curr2Node.val)
        {
            mergedList.next = curr1Node;
            curr1Node = curr1Node.next;
        }
        else if(curr1Node.val > curr2Node.val)
        {
            mergeTwoLists.next = curr2Node;
            curr2Node = curr2Node.next;
        }

    }

    //Still need case when lists are different lengths 


    return mergedList
    
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))