let a = 30;
let b = 50;

console.log("before swapping a is " + a + " and b is " + b);

// with temporary variable

let withTemp = (a, b) => {
  let c;
    c = a;  // c=30;
  a = b;    // a=50;
  b = c;    // b=30
  console.log("after swapping a is " + a + " and b is " + b);
};
// withTemp(a,b)

// without temporary variable

let withoutTemp = (a, b) => {
    a = a + b;  // a=10+20; || a=30
    b = a - b;  // b=30-20; || b=10
    a = a - b;
  console.log("after swapping a is " + a + " and b is " + b);
}


withoutTemp(a,b)