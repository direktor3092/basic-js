const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let string = String(str);
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  let prop = Object.entries(options);

prop.forEach((value =>{
  if(value[0] === 'repeatTimes') repeatTimes = value[1];
  if(value[0] === 'separator') separator = value[1];
  if(value[0] === 'addition') addition = String(value[1]);
  if(value[0] === 'additionRepeatTimes') additionRepeatTimes = value[1];
  if(value[0] === 'additionSeparator') additionSeparator = value[1];
})

let result = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
return new Array(repeatTimes).fill(string + result).join(separator);

}

module.exports = {
  repeater
};
