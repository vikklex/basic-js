import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {

  let array = n.toString().split('');
  for (let i =0; i < array.length; i++) {
    if(array[i] < array[i+1]) {
      arr.splice(i, 1);
      return Number(array.join(''));
    }
  }

  return Number(array.slice(0, -1).join(''));
}
