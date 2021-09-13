import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
   if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  else if(typeof(date) !== 'object' || !(date instanceof Date)
  || (Object.prototype.toString.call(date) !== '[object Date]') || Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }
  else if (date) {
    const month = date.getMonth() + 1;

    if (month === 12 || month === 1 || month === 2) {
      return "winter";
    } else if (month >= 3 && month < 6) {
      return "spring";
    } else if (month >= 6 && month < 9) {
      return "summer";
    } else if (month >= 9 && month < 12) {
      return "autumn";
    }
  }
}
