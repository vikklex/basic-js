import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(team) {
  let arr = [];
  let nick = [];
  if (team === null || team === undefined || team.length === 0) {
    return false
  }
  else {
  for(let i = 0; i < team.length; i++) {
    typeof(team[i]) === 'string' && team[i].length!== 0 ? arr.push(team[i].trim()) : arr
  
  }
  let array = arr.map((el) => el.toUpperCase()).sort()
  for(let i = 0; i < array.length; i++) {
    nick.push(array[i][0])
  }
  let res = nick.join('').toUpperCase().trim();
  return res
}
}
