class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    // must use else condition or empty an empty LinkedList will meet both conditions
    else if (this.head !== null) this.tail.next = newNode; // so we don't lose prior this.tail value
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) return;

    let curr = this.head;
    let newTail = curr;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      // traverse until we reach the node before the tail
      while (curr.next !== null) {
        newTail = curr; // capture the value of the node before the tail
        curr = curr.next; // on final iteration curr === this.tail
      }
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return curr;
  }

  shift() {
    if (this.length === 0) return;

    let originalHead = this.head;

    if (this.length === 1) this.tail = null;
    if (this.length >= 1) this.head = originalHead.next;

    this.length--;
    return originalHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) this.tail = newNode;
    else if (this.length) newNode.next = this.head;

    this.head = newNode;
    this.length++
  }


  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error('Invalid index');
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // TO DO - define method getAt(idx)
    let prev = this.getAt(idx - 1);
    let nodeRemoved = prev.next;

    prev.next = nodeRemoved.next;
    this.length--;
    return nodeRemoved;
  }

  // without using existing methods;
  removeAtManual(idx) {
    if (idx < 0 || idx >= this.length) throw new Error('Invalid index');

    let curr = this.head;
    let prev;

    if (idx === 0) {
      // 0 is the only valid index if this.length === 1  
      if (this.length === 1) this.tail = null;
      this.head = curr.next;
    }

    else if (idx === this.length - 1) {
      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      prev.next = null;

    } else {
      let i = 0;
      while (i < idx) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      prev.next = curr.next;
    }

    this.length--;
    return curr;
  }

  // CTCI 2.1
  removeDuplicates() {
    if (this.length < 2) return this;

    let hash = {};
    let curr = this.head;
    let prev = curr;

    while (curr !== null) {
      if (hash[curr.val]) {
        prev.next = curr.next;
        if (curr.next === null) this.tail = prev;
        this.length--;
      }
      else hash[curr.val] = 1;
      prev = curr;
      curr = curr.next;
    }
    return this;
  }

  // CTCI 2.1 follow up
  removeDuplicatesAlt() {
    if (this.length < 2) return this;

    let outer = this.head;
    let inner;
    let prevInner = this.head;

    while (outer !== null) {
      inner = outer.next;

      while (inner !== null) {
        if (outer.val === inner.val) {
          prevInner.next = inner.next;
          if (inner.next === null) this.tail = prevInner;
          this.length--;
        }
        prevInner = inner;
        inner = inner.next;
      }
      outer = outer.next;
    }
    return this;
  }

  // CTCI 2.2 basic (when length is known)
  findKthToLast(k) {
    let nodeIdx = this.length - 1 - k;
    if (arguments.length === 0 || nodeIdx < 0) return;

    if (nodeIdx === 0) return this.head;
    if (nodeIdx === this.length - 1) return this.tail;

    let curr = this.head;
    let i = 0;
    while (i < nodeIdx) {
      curr = curr.next;
      i++;
    }
    return curr;
  }

  // CTCI 2.2 optimal
  findKthToLastBetter(curr = this.head, k) {
    
  }
}
