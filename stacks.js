class StackInfo {
  constructor(start, capacity) {
    this.start = start;
    this.lastElementIndex = start;
    this.capacity = capacity;
    this.size = 0;
  }

  ifFull() {
    return this.size === this.capacity;
  }
}

class MultiStack {
  constructor(numStacks, defaultSize) {
    this.numStacks = numStacks;
    this.defaultSize = defaultSize;

    let info = [];
    for (let i = 0; i < numStacks; i++) {
      info.push(new StackInfo(i * defaultSize, defaultSize));
    }

    this.info = info;
    this.values = new Array(numStacks * defaultSize).fill(0);
  }

  // add new value to specific stack
  push(stackNum, val) {
    if (this.allStacksFull()) throw new Error('Stacks at full capacity');

    // if current stack is at capacity => make room by adjusting other stack(s) capacity and shifting values
    let stack = info[stackNum - 1];
    if(stack.isFull()) expand(stackNum);

    // if current stack has room
    // increase lastElementIndex
    // place value at lastElementIndex
    // increase size

  }

  // remove last added value from specific stack
  pop(stackNum) {
    // locate and store value at lastElementIndex
    // clear out value (set = 0)
    // decrease stack size
    // move lastElementIndex back one
    // return value

  }

  // return last added value from specific stack
  peek(stackNum) {
    // locate and return value at lastElementIndex 

  }

  // check if all stacks are at full capacity
  allStacksFull() {
    let numStacksFull = 0;
    let i = 0;
    while (i < this.info.length) {
      if (this.info[i].isFull()) numStacksFull++;
    }
    return numStacksFull === this.info.length;
  }

  // check is specific stack is empty
  isEmpty(stackNum) {
    // check stack.size vs stack.capacity
  }

  // increase capacity of specific stack
  expand(stackNum) {
    // shift values out of next stack into openings
    let nextStackNum = nexStack + 1 <= this.info.length ? stackNum + 1 : 1;
    shift(nextStackNum);
    
    let stack = info[stackNum + 1];
    stack.capacity++;
  }

  // repositions values in stack and updates lastElementIndex
  shift(stackNum) {
    
  }

}