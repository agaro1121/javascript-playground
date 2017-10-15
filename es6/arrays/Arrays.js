/**
 *
 * REFER TO THE Array.prototype documentation !!!
 * 
 */

/**
 * Some array methods modify in place
 * and other methods return new arrays
 *
 * Need to memorize this or keep API 
 * close at hand
 */

/* push/pop works on end of array. 
 * modifies in place
 *
 * shift(remove)/unshift(add) works on beginning of array
 * modifies in place
*/

/**
 * concat adds new elements to back of array
 * returns NEW array
 *
 * if you pass in an array, new array gets flattened
 * if you pass in nested array, only outside array gets flattened
 */

/**
 * Splice
 *
 * 1st arg - index to start at
 * 2nd arg - how many elements to remove
 * ...rest of args - elements to add
 *
 * Modifies in place
 */

/**
 * copyWithin
 *
 * 1st arg - target start index
 * 2nd arg - start index of elements to copy
 * 3rd arg - optional - end index of elements to copy
 * 
 * Modifies in place
 */

/**
 * reverse() and sort()
 * sort takes optional sort function
 * modifies in place
 */

/**
 * 'delete' an item from an array
 * will leave a hole when you call
 * map()
 */

/**
 * Array.join() is basically mkString
 */