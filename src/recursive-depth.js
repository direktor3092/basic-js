const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(array) {
    if (!Array.isArray(array)){
      return 0;
    }
    let result = 0;
    for(let i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        result += this.calculateDepth(array.flat());
        break;
      }
    }
    return result + 1;
  }
}

module.exports = {
  DepthCalculator
};
