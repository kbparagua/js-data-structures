class Node
{
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Stack
{
  constructor(){
    this._top = null;
  }

  push(value){
    let node = new Node(value, this._top);
    this._top = node;
  }

  pop(){
    let node = this._top;
    this._top = node.next;

    return node.value;
  }

  peek(){
    return this._top.value;
  }

  isEmpty(){
    return this._top == null;
  }

  print(){
    if ( this.isEmpty() ) return "";

    for (let currentNode = this._top; currentNode; currentNode = currentNode.next){
      let value = currentNode.value;
      console.log(`[ ${value} ]`);
    }
  }

  size(){
    let currentNode = this._top,
        size = 0;

    while (currentNode){
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  indexOf(value){
    let currentNode = this._top,
        index = -1;

    while (currentNode){
      index++;
      if (currentNode.value == value) return index;

      currentNode = currentNode.next;
    }

    return -1;
  }
}

module.exports = Stack;
