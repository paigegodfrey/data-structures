// this method stores [value, count] pairs in the min stack to account for duplicates
class StackWithMin {
  constructor() {
    this.values = [];
    this.min = [];
  }

  push(val) {
    let minTop = this.min.length - 1;

    if (!this.min.length || val < this.min[minTop[0]]) this.min.push([val, 1]);
    else if (val === this.min[minTop[0]]) this.min[minTop[1]]++;

    this.values.push(val);
  }

  pop() {
    let minTop = this.min.length - 1;

    if (this.values[this.values.length - 1] === this.min[minTop[0]]) this.min[minTop[1]]--;
    if (this.min[minTop[1]] === 0) this.min.pop();

    this.values.pop();
  }

  peek() {
    return this.values[this.values.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1[0]];
  }
}