const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  myChain: [],

  getLength() {
    return this.myChain.length;
  },
  addLink(value) {
    this.myChain.push(value);
    return this;
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.myChain.reverse();
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
