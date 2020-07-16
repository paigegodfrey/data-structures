class ArrayList {
  constructor(sizeFactor) {
    this.list = new Array(1);
    this.filled = 0;
  }

  isFull() {
    return this.filled === this.list.length;
  }

  insert(val) {
    if (this.isFull()) {
      let startingLength = this.list.length;
      while (this.list.length !== startingLength * 2) {
        this.list.push(undefined);
      }
    }
    this.list[this.filled] = val;
    this.filled++;
  }

  remove() {
    this.list[this.filled - 1] = undefined;
    this.filled--;
    if (this.filled === 0) return;
    if (this.filled <= this.list.length / 2) this.list.length /= 2;
  }
}

class StringBuilder {
  constructor() {
    this.sentence = new ArrayList();
  }

  append(str) {
    this.sentence.insert(str);
    return this.sentence.list.join('');
  }
}

// without using ArrayList
function appendString() {
  let result = [];
  for(let word of arguments) {
    result.push(word);
  }
  return result.join('');
}

function createSentence() {
  let result = [];
  for(let word of arguments) {
    result.push(word);
  }
  console.log(result);
  return result.join(' ');
}