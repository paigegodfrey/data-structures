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
  findKthToLastBetter(k) {
    if (this.head === null) return null;
    if (k === 0) return this.tail;

    let node1 = this.head;
    let node2 = this.head;

    let i = 0;
    while (i < k) {
      node2 = node2.next;
      i++;
    }

    while (node2 !== null) {
      node1 = node1.next;
      node2 = node2.next;
    }
    return node1;
  }
}
