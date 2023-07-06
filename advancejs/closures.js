// a simple example of closures

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}

x();

// a more complicated look at closure

  function parent() {
    let b = 10;
   return function child() {
        console.log(b + "printed from inside the child");
    }
    // return child;
}
let y = parent();  // after returning control in this line PARENT IS gone from callstack
console.log(y);   //here y function has refrence of child due to closure;
y();             //even though x is terminated it variabled are still binded with child ;
 
//NOTE: all this behaviour happens becz when functions are returned in js they remember their lexical scope
//      and where they were present 