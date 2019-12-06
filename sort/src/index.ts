class Sorter {
  collection: number[];

  constructor(collenction: number[]) {
    this.collection = collenction;
  }

  sort(): void {
    const { length } = this.collection;
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([1, 0, -5, 10]);
sorter.sort();
console.log(sorter.collection);
