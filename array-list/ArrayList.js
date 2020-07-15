class ArrayList {
  constructor() {
    this.list = new Array(1);
    this.size = 0;
  }

  isFull() {
    return this.size === this.list.length;
  }

  insert(val) {
    if (this.isFull()) {
      let startingLength = this.list.length;
      while (this.list.length !== startingLength * 2) {
        this.list.push(undefined);
      }
    }
    this.list[this.size] = val;
    this.size++;
  }

  remove() {
    this.list[this.size - 1] = undefined;
    this.size--;
    if (this.size <= this.list.length / 2) this.list.length /= 2;
  }
}