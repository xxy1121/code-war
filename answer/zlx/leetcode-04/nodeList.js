function Node(element) {
  this.element = element; //当前节点的元素
  this.next = null;
}
function ListNode() {
  this.head = new Node('head')
}
ListNode.prototype.findNode = function(item) {
  let currentNode = this.head;
  debugger
  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};
ListNode.prototype.insertNode = function(newELement, item) {
  const currentNode = this.findNode(item);
  currentNode.next =  new Node(newELement);
};
ListNode.prototype.findPre = function (item) {
  console.log("findPrestaret", nodeList);
  debugger
  let currentNode = this.head
  // 1. 当currentNode.next 数遍历完跳出循环
  // 2. currentNode.next.element元素与item相等 跳出循环
  // 3. 因为在相等之前就复制了 所以currentNode.next 
  while(!(currentNode.next === null) && currentNode.next.element !== item) {
    currentNode = currentNode.next
  }
  console.log('findPre', nodeList);
  return currentNode
};
ListNode.prototype.deleteNode = function(item) {
  console.log("delPrestaret", nodeList);
  const preNode = this.findPre(item);
  console.log(preNode);
  if (preNode.next !== null) {
    preNode.next = preNode.next.next;
  }
}
ListNode.prototype.reverseList = function(head) {
  let cur = this.head, pre = null
  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
const nodeList = new ListNode()
const str = "1->2->3->4->5->NULL"
const headArr = str.split('->')
for(let idx in headArr) {
  if(idx == 0) {
    nodeList.insertNode(headArr[idx], 'head')
  } else {
    nodeList.insertNode(headArr[idx], headArr[idx - 1]);
  }
}
console.log('insert', nodeList)
console.log("reverseList", nodeList.reverseList(nodeList));
console.log(JSON.stringify(nodeList))