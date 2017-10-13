/**
 * Similar to the unapply method in Scala
 * When you destructure an object,
 * the variable names must match property names in the object
 */

const obj = { b: 2, c: 3, d: 4};

const { a, b, c} = obj;
a; //undefined since there is no 'a' above
b;
c;
//d; //undefined

/**
 * Array destructuring is like Scala'
 * The 3 dots before rest are called the Spread Operator
 */
const arr = [1, 2, 3];
let [x, ...rest] = arr;
//x = 1
//rest = [2,3]
//
//