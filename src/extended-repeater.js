import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  const resArr = [];
  const arr = [];
  let string;

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (options.addition === null) {
    options.addition = "null";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    arr.push(options.addition);
  }

  string = str + arr.join(options.additionSeparator);

  for (let i = 1; i <= options.repeatTimes; i++) {
    resArr.push(string);
  }
  return resArr.join(options.separator || "+");
}
