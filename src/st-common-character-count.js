import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(/*s1, s2 */) {
  throw new NotImplementedError('Not implemented');
  
  /*s1 = s1.split('');
  let arr = new Set(s1);
  let array = [...arr];
  s2 = s2.split('');
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    s2.indexOf(array[i]) !== (-1) ? count++ : count
  }
  return count

*/
}
