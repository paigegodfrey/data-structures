class ArrayList {
  constructor(sizeFactor) {
    this.list = new Array(1);
    this.sizeFactor = sizeFactor;
    this.filled = 0;
  }

  isFull() {
    return this.filled === this.list.length;
  }

  insert(val) {
    if (this.isFull()) {
      let startingLength = this.list.length;
      while (this.list.length !== startingLength * this.sizeFactor) {
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
    if (this.filled <= this.list.length / this.sizeFactor) this.list.length /= 2;
  }
}