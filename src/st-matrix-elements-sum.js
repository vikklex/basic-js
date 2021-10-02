import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let result = 0;
  let extraSign = [];
  for (let num of matrix) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === 0) {
        extraSign.push(i);
      }
      if (!extraSign.includes(i)) {
        result += num[i];
      }
    }
  }
  return result;
}
