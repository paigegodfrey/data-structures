class StackWithMin {
  constructor() {
    this.values = [];
    this.min = [];
  }

  push(val) {
    // use less than or equal to to account for duplicate min values
    if (val <= this.min[this.min.length - 1]) this.min.push(val);
    return this.values.push(val);
  }

  pop() {
    if (this.values[this.values.length - 1] === this.min[this.min.length - 1]) this.min.pop();
    return this.values.pop();
  }

  peek() {
    return this.values[this.values.length - 1];
  }

  isEmpty() {
    return this.values.length === 0;
  }

}