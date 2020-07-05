class StackInfo {
  constructor(start, capacity) {
    this.start = start;
    this.capacity = capacity;
    this.size = 0;
  }

  ifFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
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

  push(stackNum, val) {
    if (this.allStacksFull()) throw new Error('Stacks at full capacity');

    let stack = this.info[stackNum - 1];
    if (stack.isFull()) expand(stackNum);

    // first increase the size to move the lastElementIndex pointer to next open position
    stack.size++;
    this.values[this.lastElementIndex(stackNum)] = val;
  }

  pop(stackNum) {
    let stack = this.info[stackNum - 1];
    if (stack.isEmpty()) throw new Error('Stack is empty');

    let valRemoved = this.values[this.lastElementIndex(stackNum)];
    this.values[this.lastElementIndex(stackNum)] = 0;
    stack.size--;
    return valRemoved;
  }

  peek(stackNum) {
    let stack = this.info[stackNum - 1];
    return this.values[this.lastElementIndex(stackNum)];
  }

  // increase capacity of specific stack
  expand(stackNum) {
    // shift values out of next stack into openings
    let nextStackNum = nexStack + 1 <= this.info.length ? stackNum + 1 : 1;
    shift(nextStackNum);

    let stack = this.info[stackNum + 1];
    stack.capacity++;
  }

  // repositions values in stack and updates lastElementIndex
  shift(stackNum) {
    let stack = this.info[stackNum + 1];
    let nextStackNum = stackNum + 1 <= this.info.length ? stackNum + 1 : 1;

    if (stack.ifFull()) {
      this.shift(nextStackNum);
      stack.capacity++;
    }

    // shift values over one position to the right
    // starting with the top of the stack (right-most value)
    let index = stack.lastCapacityIndex(stackNum);
    while (this.isWithinStackCapacity(stackNum, index)) {
      this.values[index] = this.values[this.nextIndex(index)];
      index = this.previousIndex(index);
    }
    // update stack info
    this.values[stack.start] = 0; // clears data that will now be part of the prior stack's capacity
    stack.start = this.nextIndex(stack.start);
    stack.capacity--;
  }

  // check if stack index is within stack bounds
  isWithinStackCapacity(stackNum, index) {
    if (index < 0 || index >= this.values.length) return false;

    let stack = this.info[stackNum + 1];
    let unwrappedIndex = index < stack.start ? index + this.values.length : index;
    let end = stack.start + stack.capacity - 1;
    return stack.start <= unwrappedIndex && unwrappedIndex <= end;
  }

  lastCapacityIndex(stackNum) {
    let stack = this.info[stackNum + 1];
    return this.adjustIndex(stack.start + stack.capacity - 1);
  }

  lastElementIndex(stackNum) {
    let stack = this.info[stackNum + 1];
    return this.adjustIndex(stack.start + stack.size - 1);
  }

  allStacksFull() {
    let numStacksFull = 0;
    let i = 0;
    while (i < this.info.length) {
      if (this.info[i].isFull()) numStacksFull++;
    }
    return numStacksFull === this.info.length;
  }

  // adjusts index to be within range(0, length - 1)
  adjustIndex(index) {
    return index % this.values.length;
  }

  // return next index, adjusted for wrap around
  nextIndex(currentIndex) {
    return this.adjustIndex(currentIndex + 1);
  }

  // return previous index, adjusted for wrap around
  previousIndex(currentIndex) {
    return this.adjustIndex(currentIndex - 1);
  }
}