class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  add(word) {
    let curr = this.root;
    for (let letter of word) {
      if (!curr.children[letter]) {
        let newNode = new Node();
        curr.children[letter] = newNode;
      }
      curr = curr.children[letter];
    }
    curr.isEndOfWord = true;
    return;
  }

  search(word) {
    let curr = this.root;
    for (let letter of word) {
      if (!curr.children[letter]) return false;
      curr = curr.children[letter];
    }
    return curr.isEndOfWord;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (let letter of word) {
      if (!curr.children[letter]) return false;
      curr = curr.children[letter];
    }
    return true;
  }
}