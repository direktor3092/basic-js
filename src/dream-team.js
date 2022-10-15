const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {

 if(!Array.isArray(members)) return false;

  firstLetterArray = [];

  members.forEach(value => {
    if (typeof (value) === 'string' && value !== '') {
      let trimed = value.trim();
      firstLetterArray.push(trimed[0].toLocaleUpperCase())
    }
  })
  return firstLetterArray.sort().join('')
}

module.exports = {
  createDreamTeam
};
