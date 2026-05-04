// static

class Counter {
  static count: number = 0; // static

  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

// const instance1 = new Counter(); // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter(); // rekta different
// console.log(instance2.increment()); //1
// console.log(instance2.increment()); // 2

// const instance3 = new Counter();
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());




class MustafizCounter 
{
  static fizcount: number = 100; 

  static barabo() 
  {
    return (MustafizCounter.fizcount = MustafizCounter.fizcount + 1);
  }

  static komabo() 
  {
    return (MustafizCounter.fizcount = MustafizCounter.fizcount - 1);
  }
}


// Array.forEach(Array: MustafizCounter => {

// // MustafizCounter.komabo();
// // MustafizCounter.barabo();

// });


// MustafizCounter.barabo();
// MustafizCounter.barabo();
console.log(MustafizCounter.komabo());
console.log(MustafizCounter.barabo());


class MustafizCounterManager 
{
  private _counts: number[] = [100, 200, 300, 400];

  // Method to iterate over the counter array
  displayCounts() 
  {
    this._counts.forEach
   (
      (count, index) => 
     {
      console.log(`Index ${index}: Value ${count}`);
     }
   );

  }
}

const manager = new MustafizCounterManager(); // instance created
manager.displayCounts();
// Output:
// Index 0: Value 100
// Index 1: Value 200
// Index 2: Value 300
// Index 3: Value 400