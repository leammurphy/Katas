function length(head) {
  let count = 0;
  let node = head
  while(node) {
    count++
    node = node.next
  }
  return count;
}