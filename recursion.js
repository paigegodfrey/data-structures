class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // O(log n) time
  // O(1) space
  // always attach to the END of the tree
  // traverse through nodes by comparing val to curr.val
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let curr = this.root;
    while (true) {
      if (val === curr.val) throw new Error('duplicate value');

      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      }

      else if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      }
    }
  }
}

const sum = node => {
  if (node === null) {
    return 0;
  }
  console.log(node.val);
  return sum(node.left) + node.val + sum(node.right);
}

const f = n => {
  let sum = 0;
  console.log({ n, sum });
  if (n <= 1) {
    return 1;
  }
  return sum += f(n - 1) + f(n - 1);
}