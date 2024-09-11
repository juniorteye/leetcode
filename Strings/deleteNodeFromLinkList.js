var modifiedList = function(nums, head) {
   // convert nums to a set: Convert the nums array to a set to allow for O(1) lookups.{1,2,3}
   // as you travese the Linked List: As you traverse the Linked list, check if the node's value exists in the set.
   // Remove Nodes: j
   //implementation
   // turn enum into set
   // Traverse the linked list
   // Check if the current node's value is in nums array
   // If it is, skip it; otherwise, keep it.
    let numset = new Set(nums);
    let current = head
    let prev = null;

    while(current !== null){
        if(numset.has(current.val)){
            if(prev === null){
                head = current.next
            }else{
                prev.next = current.next
            }
        }else{
            prev = current
        }
        current = current.next
    }
    return head;
};