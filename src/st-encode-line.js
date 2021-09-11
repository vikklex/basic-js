import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  str = str.split('');
  let res = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      count++;
    }
    else {
      count === 1 ? res.push('', str[i]) : res.push(count, str[i])
      count = 1;
    }
  }
  return res.join('');
}
